import os
from flask import Flask, render_template
from flask_cors import CORS

from flask_jwt_extended import JWTManager

def create_app():
  # setup Flask app
  app = Flask("pollapp")
  
  # database and session management
  app.config["SECRET_KEY"]='have a good day'
  app.config.from_mapping(
          DATABASE=os.path.join(app.instance_path, 'pollapp.sqlite')
  )
  try:
    os.makedirs(app.instance_path)
  except OSError:
    pass

  # for api requests
  CORS(app)

  # for jwt extension  
  app.config["JWT_SECRET_KEY"] = "have a good day"
  jwt = JWTManager(app)

  @app.route("/")
  def home():
          
    return render_template("home.html")

  # Registering Non-API Blueprints
  #from . import auth
  #app.register_blueprint(auth.bp)

  #from . import user
  #app.register_blueprint(user.bp)

  #from . import polls
  #app.register_blueprint(polls.bp)

  # Registering API Blueprints
  from .api import auth as api_auth
  app.register_blueprint(api_auth.bp)

  from .api import polls as api_polls
  app.register_blueprint(api_polls.bp)

  # registering db 
  from . import db
  db.init_app(app)

  return app
