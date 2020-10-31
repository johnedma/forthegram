import React, { useState, useContext } from 'react';
import PostContext from '../../PostContext';


const CommentSection = () => {
    const post = useContext(PostContext)
    const comments = post.postData.post.comments

    return (
        <div style={{
            width: "400px",
            height: "400px"
        }}>
            {comments.map((comment, idx) =>
                <div style={{
                    marginBottom: "5px",
                }} key={idx}><strong style={{
                    color: "#489dcf"
                }}>UserName</strong> {comment.content}</div>
            )}
        </div>
    );
}

export default CommentSection
