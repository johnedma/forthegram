import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../auth';
import PostContext from '../../PostContext';

function AddComment() {
    const [content, setContent] = useState('')
    const post = useContext(PostContext)
    const { currentUserId } = useContext(AuthContext)
    const post_id = post.postData.post.id


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
                const res = await fetch(`/api/comments/${post_id}`, {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                if (res.ok){
                    const comment = await res.json()
                }
            } catch(e) {
                console.error(e)
            }
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
            <form style={{
                display: "grid",
                gridTemplateColumns: "350px 10px",
                justifyItems: "start"
            }} onSubmit={onSubmit}>
                <input style={{
                    border: "0px",
                    height: "45px",
                    right: "100px",
                    backgroundColor: "#ffff"


                }} className="add-name_input" type="text" placeholder="Add comment..." value={content} onChange={sayHello}/>
                <button style={{
                    border: "0px",
                    color: "#489dcf",
                    backgroundColor: "#ffff",
                    fontSize: "15px",
                    fontWeight: "bold",
                    cursor: "pointer"
                }} className="add-comment_button" type="submit">Post</button>
            </form>

        </div>
    )
}

export default AddComment
