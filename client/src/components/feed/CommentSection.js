import React, { useEffect, useState } from 'react';

function CommentSection({ comments, names }) {

    return (
        <div className="feed-post-comments" style={{
            width: "700px",
            textAlign: "left",
            margin: "0 auto",
            marginBottom: "10px",
        }}>
            {comments.map((comment, idx) =>
                <div style={{
                    marginBottom: "5px",
                }} key={idx}>
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
