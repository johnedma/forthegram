from flask import Blueprint, send_file
from aws import list_files, download_file, upload_file


bp = Blueprint('posts', __name__, url_prefix='/api/posts')

UPLOAD_FOLDER = 'uploads'
BUCKET = "petstagram"


@bp.route('/:id', methods=['GET', 'PUT', 'DELETE'])
def download():
    pass


@bp.route('/', methods=['POST'])
def upload():
    pass
