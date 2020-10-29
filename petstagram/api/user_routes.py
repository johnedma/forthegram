from flask import Blueprint, jsonify, request, redirect
from petstagram.models import User, db
from datetime import datetime
from flask_login import login_required

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


@user_routes.route('/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def user_info(id):
    if request.method == "GET":
        uid = (int(id))
        get_user = User.query.filter(User.id == uid)[0].to_dict()

        return get_user
    if request.method == 'DELETE':
        uid = (int(id))
        get_user = User.query.filter(User.id == uid).delete()
        db.session.commit()
        return redirect("/api/users")

    if request.method == 'PUT':
        uid = (int(id))
        get_user = User.query.filter(User.id == uid)[0]
        get_user.user_name = request.form['userName']
        get_user.password = request.form['password']
        get_user.updated_at = datetime.now()
        db.session.commit()

        return redirect("/api/users")
