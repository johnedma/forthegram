import React from 'react'

function AddComment() {
    return (
        <div className="add-comment-wrapper">
            <textarea style={{
                width: "1000px",
                border: "0",
                height: "50px"
            }} placeholder="Add comment..." className="add-name_input"/>
            <button className="add-comment_button">Post</button>
        </div>
    )
}

export default AddComment
