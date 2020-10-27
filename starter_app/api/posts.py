from flask import Blueprint, send_file, redirect, request
from starter_app.aws import list_files, download_file, upload_file
from ..models import db, User, Post
import os


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

        # new_post_url = f'https://petstagram.s3.us-east-2.amazonaws.com/{id}.jpg'
        return get_post



@posts.route('/', methods=['POST'])
def upload():
    if request.method == "POST":

        f = request.files['file']
        f.save(os.path.join(UPLOAD_FOLDER, f.filename))
        upload_file(f"uploads/{f.filename}", BUCKET)

        return redirect("/")
