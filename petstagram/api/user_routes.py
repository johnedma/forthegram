from flask import Blueprint, jsonify, request, redirect
from petstagram.models import User, db, Follow
from datetime import datetime
from flask_login import login_required, logout_user
from sqlalchemy import or_

user_routes = Blueprint('users', __name__)


@user_routes.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'GET':
        response = User.query.all()
        return {"users": [user.to_dict() for user in response]}

# FWIW, the signup form uses a route in __init__.py
    if request.method == 'POST':
        user_name = request.form['userName']
        first_name = request.form['firstName']
        last_name = request.form['lastName']
        DOB = request.form['dob']
        password = request.form['password']
        created_at = datetime.now()
        updated_at = datetime.now()

        new_user = User(
            user_name=user_name,
            first_name=first_name,
            last_name=last_name,
            DOB=DOB,
            password=password,
            created_at=created_at,
            updated_at=updated_at
        )
        db.session.add(new_user)
        db.session.commit()
        return redirect('/api/users')


@user_routes.route('/<id>', methods=['GET', 'PUT', 'DELETE'])
def user_info(id):
    user = User.query.filter(User.id == int(id))[0]
    if request.method == "GET":
        return user.to_dict()
    if request.method == 'DELETE':
        follows = Follow.query.filter(or_(Follow.follower_id == int(id), Follow.followed_id == int(id))).all()
        for follow in follows:
            db.session.delete(follow)
        db.session.delete(user)
        db.session.commit()
        logout_user()
        # return redirect("/api/users")
        return {"message": "goodbye"}
    if request.method == 'PUT':
        # print("GETTING TO PUT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        userd = user.to_dict()
        if not request.is_json:
            return jsonify({"msg": "Missing JSON in request"}), 400
        user.user_name = request.json.get('username', None) or userd["user_name"]
        user.password = request.json.get('password', None)  # or userd["password"]
        user.password2 = request.json.get('password2', None)  # or userd["password2"]
        user.first_name = request.json.get('fullname', None) or userd["first_name"]
        user.last_name = request.json.get("fullname", None) or userd["last_name"]
        user.email = request.json.get('email', None) or userd["email"]
        user.full_name = request.json.get("fullname", None) or userd["full_name"]
        user.website = request.json.get('website', None) or userd["website"]
        user.bio = request.json.get('bio', None) or userd["bio"]
        user.phone = request.json.get('phone', None) or userd["phone"]
        user.gender = request.json.get('gender', None) or userd["gender"]
        user.updated_at = datetime.now()
        password = request.json.get('password', None)
        password2 = request.json.get('password2', None)
        if not password or not password2:
            return {"errors": ["Missing required parameters"]}, 400
        if password == password2:
            user.password = password
        else:
            return {"errors": ["Passwords must match."]}, 400

        db.session.commit()
        return user.to_dict()
