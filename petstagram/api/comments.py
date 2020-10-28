from flask import Blueprint, request, redirect
from petstagram.models import Comment, db, Post
from datetime import datetime
from flask_login import current_user

comments = Blueprint('comments',__name__)


@comments.route('/<id>', methods=['GET', 'POST'])
def index(id):
    pid = int(id)

    if request.method == 'GET':
        get_comments = Comment.query.filter(Comment.post_id == pid).all()
        return {"comments": [comment.to_dict() for comment in get_comments]}

    if request.method == 'POST':
        user_id = current_user.id
        post_id = pid
        content = request.form['comment']
        created_at = datetime.now()
        updated_at = datetime.now()

        new_comment = Comment(
                            user_id=user_id,
                            post_id=post_id,
                            content=content,
                            created_at=created_at,
                            updated_at=updated_at
        )
        db.session.add(new_comment)
        db.session.commit()
        return redirect(f'/api/comments/{pid}')


@comments.route('/<id>/<id2>', methods=['DELETE'])
def delete_comment(id, id2):
    pid = int(id)
    cid = int(id2)
    get_comment = Comment.query.filter(Comment.id == cid).delete()
    db.session.commit()
    return redirect(f'/api/comments/{pid}')
