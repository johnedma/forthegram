import React, { useState, useContext, useEffect } from 'react';
import PostContext from '../../PostContext';


const CommentSection = () => {
    const post = useContext(PostContext)
    const comments = post.postData.post.comments
    const names = post.postData.post.names
    const { updatedComments, setUpdatedComments } = useContext(PostContext);

    // useEffect(() => {}, [updatedComments]);
    // setUpdatedComments(false);

    return (
        <div style={{
            width: "400px",
            height: "240px",
            padding: `0 16px`
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
