from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()


class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(40), nullable=False, unique=True)
    first_name = db.Column(db.String(40))
    last_name = db.Column(db.String(40))
    DOB = db.Column(db.Date, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)

    posts = db.relationship("Post", back_populates="user")
    # follows = db.relationship("Follow", back_populates="user")

    def to_dict(self):
        return {
            "id": self.id,
            "user_name": self.user_name,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "DOB": self.DOB,
            "created_at": this.created_at,
            "updated_at": this.updated_at
        }


class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(
        db.Integer, db.ForeignKey("users.id"), nullable=False
        )
    photo_url = db.Column(db.String(80), unique=True)
    caption = db.Column(db.String(40))
    created_at = db.Column(db.DateTime, nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)

    user = db.relationship("User", back_populates="posts")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "photo_url": self.photo_url,
            "caption": self.caption,
            "created_at": this.created_at,
            "updated_at": this.updated_at
        }


# class Follow(db.Model):
#     __tablename__ = 'follows'

#     id = db.Column(db.Integer, primary_key=True)
#     follower_id = db.Column(
#         db.Integer, db.ForeignKey("users.id"), nullable=False
#         )
#     followed_id = db.Column(
#         db.Integer, db.ForeignKey("users.id"), nullable=False
#         )
#     created_at = db.Column(db.DateTime, nullable=False)

#     user = db.relationship("User", back_populates="follows")

#     def to_dict(self):
#         return {
#             "id": self.id,
#             "follower_id": self.follower_id,
#             "followed_id": self.followed_id,
#             "created_at": this.created_at,
#         }
