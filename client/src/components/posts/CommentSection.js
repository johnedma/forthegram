import React, { useState, useContext } from 'react';
import PostContext from '../../PostContext';


const CommentSection = () => {
    const post = useContext(PostContext)
    const comments = post.postData.post.comments
    const names = post.postData.post.names

    return (
        <div style={{
            width: "400px",
            height: "240px"
        }}>
            {comments.map((comment, idx) =>
                <div style={{
                    marginBottom: "5px",
                }} key={idx}>
                    {/* <strong style={{
                    color: "#489dcf"
                }}>{names[idx]}</strong>  */}
                    <a href={`/${names[idx]}`}>
                        <strong style={{
                            color: "#489dcf"
                        }}>{names[idx]}</strong> </a>
                    {comment.content}</div>
            )}
        </div>
    );
}

export default CommentSection
