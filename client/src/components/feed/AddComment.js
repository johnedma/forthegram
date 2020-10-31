import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../auth';
// import PostContext from '../../PostContext';

function AddComment({ post_id }) {
    const [content, setContent] = useState('')
    const { currentUserId } = useContext(AuthContext)

    // const getComment = e => {
    //     console.log('hello');
    //     // console.log(e.target.value)
    //     // setContent(e.target.value)
    // }

    const sayHello =e=> {
        setContent(e.target.value)
        // console.log(content)
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        if (content === '') return
        const data = {
            user_id: currentUserId,
            post_id,
            content,
        }

            try{
                const res = await fetch(`api/comments/30`, {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                if (res.ok){
                    // const comment = await res.json()
                    console.log('hello')
                }
            } catch(e) {
                console.error(e)
            }
        // console.log(data)
        setContent('')

    }

    // const makeComment = async (e) => {
    //     e.preventDefault()
    //     if (content === '') return
    //     const data = {
    //         user_id: currentUserId,
    //         post_id: post_id,
    //         content: content,
    //     }
    //     const res = await fetch(`/comments/${post_id}`, {
    //         method: "POST",
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(data)
    //     })

    //     const comment = await res.json()
    //     if (res.ok){
    //         post.postData.post.comments.append(comment)
    //         setContent('')
    //     }

    // }
    return (
        <div className="add-comment-wrapper">
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="add comment..." value={content} onChange={sayHello}/>
                <input type="submit"/>
            </form>
            {/* <form className="comment-form" onSubmit={makeComment}>
                <textarea style={{
                    width: "400px",
                    border: "0px",
                    height: "45px",
                    margin: "0 auto",
                }} className="add-name_input" placeholder="Add a comment..." value={content} onChange={getComment} />
                <button className="add-comment_button" type="submit">Post</button>
            </form> */}
        </div>
    )
}

export default AddComment
