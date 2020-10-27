from flask import Blueprint, send_file, redirect
from starter_app.aws import list_files, download_file, upload_file


posts = Blueprint('posts', __name__)

UPLOAD_FOLDER = 'uploads'
BUCKET = "petstagram"


@posts.route('/:id', methods=['GET', 'PUT', 'DELETE'])
def download():
    pass


@posts.route('/', methods=['POST'])
def upload():
    if request.method == "POST":

        f = request.files['file']
        f.save(os.path.join(UPLOAD_FOLDER, f.filename))
        upload_file(f"uploads/{f.filename}", BUCKET)

        return redirect("/")
