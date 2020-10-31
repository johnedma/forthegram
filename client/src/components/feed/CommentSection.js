import React from 'react'

function CommentSection({comments, names}) {
    // const comments = [
    //     "OMG this is so cute!",
    //     "Killing em",
    //     "Hey, I didn't know you were in town!",
    //     "That hate is awesome LOL"
    // ]

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
                }} key={idx}><strong style={{
                    color: "#489dcf"
                }}>{names[idx]}</strong> {comment.content}</div>
            )}
        </div>
    );
}

export default CommentSection
