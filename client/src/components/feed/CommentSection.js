import React from 'react'

function CommentSection() {
    const comments = [
        "OMG this is so cute!",
        "Killing em",
        "Hey, I didn't know you were in town!",
        "That hate is awesome LOL"
    ]

    return (
        <div className="feed-post-comments" style={{
            width: "700px",
            textAlign: "left",
            margin: "0 auto",
            marginBottom: "10px"
        }}>
            {comments.map((comment, idx) =>
                <div key={idx}>UserName {comment}</div>
            )}
        </div>
    );
}

export default CommentSection
