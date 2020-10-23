(all routes begin with "api" & are using blueprints)

url_prefix = "/":
all of my followed's posts

Blueprints: url_prefix = "/api/user"

GET /:id    (get user and posts etc)
POST /      (create new user)
PUT /:id    edit user info
DELETE /:id (delete account)

Blueprints: url_prefix = "/api/posts"

GET /:id    get a particular post etc
POST /      create new post
PUT  /:id   edit post (e.g., caption)
DELETE /:id delete post

url_prefix "/api/comments"
GET /:id    get all comments for a particular post
POST /:id   post a comment for a particular post
DELETE /:id delete a comment for  particular post

url_prefix "/api/likes"
GET /:id    get all likes for a particular post
POST /:id   like a particular post
DELETE /:id un-like a particular post

prefix: /:id/followers
GET     / listing of followers

prefix: /:id/followeds
GET     /   listing of people that user is following
POST    /   follow someone
DELETE  /   un-follow someone
