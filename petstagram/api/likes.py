from flask import Blueprint, request, redirect
from petstagram.models import Comment, db, Post, Like
from datetime import datetime
from flask_login import current_user

likes = Blueprint('likes',__name__)

@likes.route('/<id>', methods=['GET'])
def index(id):
    pid = int(id)
    if request.method == 'GET':
        get_likes = Like.query.filter(Comment.post_id == pid).order_by(Like.created_at.desc()).all()
        like_count = len(get_likes)
        likes = [like.to_dict() for like in get_likes]

        # likes_count = len(likes)
        # likes_latest = Like.query.order_by(Like.created_at.desc()).first()
        return {"likes": likes, "count": like_count}
