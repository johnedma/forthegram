from flask import Blueprint, send_file, redirect, request
from petstagram.aws import list_files, download_file, upload_file
from datetime import datetime
from ..models import db, User, Post
import os
import time


posts = Blueprint('posts', __name__)

UPLOAD_FOLDER = 'uploads'
BUCKET = "petstagram"


@posts.route('/')
def index():
    response = Post.query.all()
    return {"posts": [post.to_dict() for post in response]}


@posts.route('/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def download(id):
    if request.method == "GET":
        pid = (int(id))
        get_post = Post.query.filter(Post.id == pid)[0].to_dict()

        return get_post
    if request.method == 'DELETE':
        pid = (int(id))
        get_post = Post.query.filter(Post.id == pid).delete()
        db.session.commit()
        return redirect("/api/posts")

    if request.method == 'PUT':
        pid = (int(id))
        get_post = Post.query.filter(Post.id == pid)[0]
        get_post.caption = request.form['caption']
        get_post.updated_at = datetime.now()
        db.session.commit()

        return redirect("/api/posts")


@posts.route('/<userId>/<caption>', methods=['POST'])
def upload(userId, caption):
    if request.method == "POST":
        f = request.files['file']
        f.filename = change_name(f.filename)
        f.save(os.path.join(UPLOAD_FOLDER, f.filename))
        upload_file(f"uploads/{f.filename}", 
                    BUCKET,
                    )
        photo_url = f'https://petstagram.s3.us-east-2.amazonaws.com/{f.filename}'
        created_at = datetime.now()
        updated_at = datetime.now()

        new_post = Post(
                        user_id=userId,
                        photo_url=photo_url,
                        caption=caption,
                        created_at=created_at,
                        updated_at=updated_at
        )
        db.session.add(new_post)
        db.session.commit()

        data = {'user_id': userId,
                'photo_url': photo_url,
                'caption': caption,
                'created_at': created_at,
                'updated_at': updated_at}
        return {'data': data}

def change_name(file_name):
    return f"{time.ctime().replace(' ', '').replace(':', '')}.png"
