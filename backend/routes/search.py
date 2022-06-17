import os
from flask import Blueprint, request, json
from psycopg2 import connect, extras

search = Blueprint("search", __name__)

conn = connect(
  dbname = os.environ.get("db_name"),
  user = os.environ.get("db_user"),
  host = "db",
  password = os.environ.get("db_password")
)
db = conn.cursor(cursor_factory=extras.RealDictCursor)

@search.route("/", methods=["GET"])
def index():
  q = request.args.get("q")
  db.execute("SELECT id, title, image_path FROM movies WHERE title ILIKE %s", (f"%{q}%",))
  movies = db.fetchall()
  return { "movies": movies }, 200