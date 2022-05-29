import os
import datetime
from functools import wraps

from flask import Flask, request, json
from flask_cors import CORS
from werkzeug.security import check_password_hash, generate_password_hash
from re import search
from psycopg2 import connect, extras
from jwt import encode, decode

app = Flask(__name__)

app.config["SECRET_KEY"] = os.environ.get("SECRET_KEY")
conn = connect(
  dbname = os.environ.get("db_name"),
  user = os.environ.get("db_user"),
  host = "db",
  password = os.environ.get("db_password")
)
db = conn.cursor(cursor_factory=extras.RealDictCursor)

CORS(app)

def token_required(f):
  @wraps(f)
  def decorator(*args, **kwargs):
    token = None
    if "x-access-tokens" in request.headers:
      token = request.headers["x-access-tokens"]
 
    if not token:
      return { "message": "a valid token is missing" }
    try:
      data = decode(token, app.config["SECRET_KEY"], algorithms=["HS512"])
      db.execute("SELECT * FROM costumer WHERE id = (%s)", (data["id"],))
      user = db.fetchall()[0]
    except:
      return { "message": "token is invalid" }
    return f(user, *args, **kwargs)
  return decorator


@app.route("/login", methods=["POST"])
def login():
  data = json.loads(request.data)

  db.execute("SELECT id, name, password_hash FROM costumer WHERE email = (%s)", (data["email"],))
  user = db.fetchall()
  if len(user) != 1:
    return { "error": "Invalid e-mail" }, 401

  if not check_password_hash(user[0]["password_hash"], data["password"]):
    return { "error": "Invalid password" }, 401

  # generate token
  token = encode({
    "id": user[0]["id"],
    "exp": datetime.datetime.utcnow() + datetime.timedelta(minutes=30),
  }, app.config["SECRET_KEY"], "HS512")

  return { "token": token, "name": user[0]["name"] }, 200


@app.route("/register", methods=["POST"])
def register():
  data = json.loads(request.data)
  if data["email"] != data["emailConfirmation"]:
    return { "error": "E-mail and E-mail confirmation must match" }

  # Regex adapted from https://stackoverflow.com/questions/19605150
  # Check if password has 1 uppercase, 1 lowercase, 1 symbol and 1 digit
  PASSWORD_REGEX = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]"
  if len(data["password"]) < 8 or not search(PASSWORD_REGEX, data["password"]):
    return { "error": "Invalid password" }

  db.execute("SELECT count(email) AS email_count FROM costumer WHERE email = (%s)", (data["email"],))
  if db.fetchall()[0]["email_count"] > 0:
    return { "error" : "E-mail already registered" }

  name = f"{data['firstName'].strip().capitalize()} {data['lastName'].strip().capitalize()}"
  password_hash = generate_password_hash(data["password"], method="sha512")
  db.execute("INSERT INTO costumer (name, email, password_hash) VALUES (%s, %s, %s)",
    (name, data["email"], password_hash))
  conn.commit()

  return { "message": "Successfully register" }, 200


@app.route("/movies")
def movies():
  db.execute("SELECT id, title, image_path FROM movies LIMIT 10")
  films = db.fetchall()
  return { "result": films }, 200


@app.route("/movie/<movie_id>")
def movie(movie_id):
  db.execute("""SELECT title, image_path, year, genre, duration, mpaa, rating
    FROM
      movies JOIN movies_info ON movies.id = movies_info.movie_id
    WHERE movies.id = (%s)""",
  (movie_id,))
  film = db.fetchall()
  if len(film) != 1:
    return { "error": "Could not find this movie" }, 404

  db.execute("""SELECT theaters.id AS theater_id, sessions.id AS session_id,
    theaters.name, to_char(date, 'HH24:MI') AS time, number
    FROM
      rooms JOIN sessions ON rooms.id = sessions.room_id JOIN theaters ON theaters.id = rooms.theater_id
    WHERE sessions.movie_id = (%s) AND theaters.city = (%s)
    ORDER BY theater_id, number ASC""",
  (movie_id, 'Manaus'))
  sessions = db.fetchall()

  return {
    "result": {
      "film": film,
      "sessions": sessions
    }
  }, 200


if __name__ == "__main__":
  app.run(host="0.0.0.0", debug=True)