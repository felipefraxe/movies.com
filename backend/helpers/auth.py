from flask import request
from jwt import decode
from functools import wraps

def token_required(f):
  @wraps(f)
  def decorator(*args, **kwargs):
    token = None
    if "x-access-tokens" in request.headers:
      token = request.headers["x-access-tokens"]
 
    if not token:
      return { "message": "a valid token is missing" }
   # try:
    data = decode(token, app.config["SECRET_KEY"], algorithms=["HS512"])
    db.execute("SELECT * FROM costumer WHERE id = (%s)", (data["id"],))
    user = db.fetchall()[0]
    """     except:
      return { "message": "token is invalid" } """
    return f(user, *args, **kwargs)
  return decorator