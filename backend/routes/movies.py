import os
from flask import Blueprint, request, json
from psycopg2 import connect, extras

movies = Blueprint("movies", __name__)

conn = connect(
  dbname = os.environ.get("db_name"),
  user = os.environ.get("db_user"),
  host = "db",
  password = os.environ.get("db_password")
)
db = conn.cursor(cursor_factory=extras.RealDictCursor)

@movies.route("/")
def index():
  db.execute("SELECT id, title, image_path FROM movies LIMIT 10")
  films = db.fetchall()
  return { "result": films }, 200


@movies.route("/<movie_id>")
def movie(movie_id):
  db.execute("""SELECT title, image_path, year, genre, duration, mpaa, rating
    FROM
      movies JOIN movies_info ON movies.id = movies_info.movie_id
    WHERE movies.id = (%s)""", (movie_id,))
  film = db.fetchall()
  if len(film) != 1:
    return { "error": "Could not find this movie" }, 404

  db.execute("""SELECT theaters.id AS theater_id, sessions.id AS session_id,
    theaters.name, to_char(date, 'HH24:MI') AS time, number
    FROM
      rooms JOIN sessions ON rooms.id = sessions.room_id JOIN theaters ON theaters.id = rooms.theater_id
    WHERE sessions.movie_id = (%s) AND theaters.city = (%s)
    ORDER BY theater_id, number, time ASC""",
  (movie_id, "Manaus"))
  sessions = db.fetchall()

  return {
    "result": {
      "film": film,
      "sessions": sessions
    }
  }, 200