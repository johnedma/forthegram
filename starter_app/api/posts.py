from flask import Blueprint, redirect

posts = Blueprint('posts', __name__)


@posts.route('/', methods=['GET'])
def index():
    return 'posts'

# @bp.route('/:id', )
