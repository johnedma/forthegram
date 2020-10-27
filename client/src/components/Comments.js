import React from 'react';

const Comments = ({ postComments }) => {
    return (
        <div className="comments">
            {postComments.map(comment =>

                <div className="comment" key="">
                    <strong><a href={comment.user}>{comment.user}</a> </strong> : {comment.comment}
                    <div>{comment.createdAt}</div>
                </div>
            )}

        </div>
    );
};

export default Comments;
