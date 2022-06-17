import os
from flask import Blueprint, request, json
from psycopg2 import connect, extras
from .auth import token_required

sessions = Blueprint("sessions", __name__)

conn = connect(
  dbname = os.environ.get("db_name"),
  user = os.environ.get("db_user"),
  host = "db",
  password = os.environ.get("db_password")
)
db = conn.cursor(cursor_factory=extras.RealDictCursor)

@sessions.route("/<session_id>")
def session(session_id):
  db.execute("""SELECT title, image_path FROM movies WHERE id IN
    (SELECT movie_id FROM sessions WHERE id = %s)""", (session_id,))
  movie = db.fetchall()

  db.execute("""SELECT theaters.name, rooms.number
    FROM theaters JOIN rooms ON theaters.id = rooms.theater_id WHERE rooms.id IN
    (SELECT room_id FROM sessions WHERE id = %s)""", (session_id,))
  theater = db.fetchall()

  db.execute("""SELECT to_char(date, 'Day') AS weekday, to_char(date, 'DD/MM HH24:MI') AS date
    FROM sessions WHERE id = %s""", (session_id,))
  date = db.fetchall()

  db.execute("""SELECT name, id FROM seats WHERE room_id IN
    (SELECT room_id FROM sessions WHERE id = %s)""", (session_id,))
  seats = db.fetchall()

  db.execute("SELECT seat_id FROM tickets WHERE session_id = %s", (session_id,))
  occupied = list(map(lambda seat_data: seat_data["seat_id"], db.fetchall()))

  return {
    "result": {
      "movie": movie,
      "theater": theater,
      "date": date,
      "seats": seats,
      "occupied": occupied,
    }
  }, 200


@sessions.route("<session_id>/buy", methods=["POST"])
@token_required
def buy(user, session_id):
  data = json.loads(request.data)
  db.execute("SELECT seat_id FROM tickets WHERE session_id = %s", (session_id,))
  occupied = db.fetchall()

  for occupied_seat in occupied:
    for seat_id in data["seats"]:
      if seat_id == occupied_seat["seat_id"]:
        return { "message": "ticket unavailable" }, 409

  try:
    for seat_id in data["seats"]:
      db.execute("INSERT INTO tickets (costumer_id, session_id, seat_id) VALUES (%s, %s, %s)",
        (user["id"], session_id, seat_id))
    conn.commit()
    return { "message": "Successfully bought ticket(s)" }, 200
  except:
    return { "message": "Something went wrong" }, 501