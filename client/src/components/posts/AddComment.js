import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../auth';
import PostContext from '../../PostContext';

function AddComment() {
    const [content, setContent] = useState('')
    const post = useContext(PostContext)
    const { currentUserId } = useContext(AuthContext)
    const post_id = post.postData.post.id

    const getComment = e => {
        setContent(e.target.value)
    }

    const makeComment = async (e) => {
        e.preventDefault()
        if (content === '') return
        const data = {
            user_id: currentUserId,
            post_id: post_id,
            content: content,
        }
        const res = await fetch(`/comments/${post_id}`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })

        if (res.ok){
            const comment = await res.json()
            post.postData.post.comments.append(comment)
            setContent('')
        }

    }
    return (
        <div className="add-comment-wrapper">
            <form className="comment-form" onSubmit={makeComment}>
                <textarea style={{
                    width: "800px",
                    border: "0px",
                    height: "45px"
                }} className="add-name_input" placeholder="Add a comment..." value={content} onChange={getComment} />
                <button className="add-comment_button" type="submit">Post</button>
            </form>
        </div>
    )
}

export default AddComment
