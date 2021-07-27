from flask import request, jsonify
from flask import Blueprint

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

from .. import db

bp = Blueprint ('api_auth', 'api_auth', url_prefix='/api/auth')

@bp.route('/create-token', methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

   # if email != 'test' or password != 'test':
   #     return jsonify({"msg": "Bad username or password"}), 401

    # checking if user exists
    userdata = db.get_user_by_email(email)
    if userdata == None : # if userdata is  None, or user does not exist
        return jsonify({'msg':'User does not exist'}), 401

    # connecting to database
    conn = db.get_db()
    cur = conn.cursor()

    # fefetching password and checking it
    cur.execute("SELECT pass FROM userdata WHERE email=?", [email])
    user_password = cur.fetchone()[0]
    cur.close()

    # to do: check password using hash function
    if password != user_password:
        return jsonify({'msg': "Incorrect Password"}), 401
    
    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token), 200

@bp.route('/create-user', methods=["POST"])
def create_user():
    email = request.json.get("email", None)
    name = request.json.get("name", None)
    password = request.json.get("password", None)

    # check if user already present
    userdata = db.get_user_by_email(email)
    if userdata: # i.e. userdata is not None
        return jsonify({"msg":"user already exists"}), 400

    # update database with details of new user
    conn = db.get_db()
    cur = conn.cursor()

    cur.execute("INSERT INTO userdata(name, email, pass) VALUES (?,?,?)", [name, email, password])
    # close db cursor
    conn.commit()
    cur.close()

    return jsonify(dict(msg="User created Successfully")), 200

@bp.route('/userdata')
@jwt_required
def userdata():
    # geting email from token
    email = get_jwt_identity()
    
    #accessing db to get related details
    userdata = db.get_user_by_email(email)
    if userdata:
        return jsonify(userdata)
    else:
        return jsonify({error: "User not found"}), 401
