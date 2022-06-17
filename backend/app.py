import os
from flask import Flask
from flask_cors import CORS

from routes.movies import movies
from routes.auth import auth
from routes.search import search
from routes.sessions import sessions

app = Flask(__name__)

CORS(app)

app.register_blueprint(auth, url_prefix="/auth")
app.register_blueprint(movies, url_prefix="/movies")
app.register_blueprint(sessions, url_prefix="/sessions")
app.register_blueprint(search, url_prefix="/search")

if __name__ == "__main__":
  app.run(host="0.0.0.0", debug=True)