import React, { useState, useContext } from 'react';
import PostContext from '../../PostContext';


const CommentSection = () => {
    const post = useContext(PostContext)
    const comments = post.postData.post.comments

    return (
        <div>
            {comments.map((comment, idx) =>
                <div key={idx}>UserName {comment.content}</div>
            )}
        </div>
    );
}

export default CommentSection
