//take post id and navigate to /post/pid route
//get all post info including user id
//implement signle post logic
//make feed posts clickable
//when post is clicked, navigate to posts/id front end route

import React, { useState, useEffect } from 'react'
import AddComment from './AddComment'
import CommentSection from './CommentSection'
import Header from './Header'
import Icons from './Icons'
import Photo from './Photo'
import Modal from 'react-modal';
import SinglePost from '../posts/SinglePost'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '910px',
        height: '90vh',
        borderRadius: "30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },

    content: {
        border: '0',
        // borderRadius: '4px',
        borderRadius: "15px",
        bottom: 'auto',
        minHeight: '10rem',
        left: '50%',
        // padding: '2rem',
        position: 'fixed',
        right: 'auto',
        top: '50%',
        transform: 'translate(-50%,-50%)',
        minWidth: '20rem',
        // width: '80%',
        width: '60%',
        // maxWidth: '60rem',
        // maxWidth: '30rem',
        padding: `0`,
        // height: `60%`
        //
        top: `55%`,
        background: `rgb(255, 255, 255)`,
        /* overflow: auto; */
        /* min-height: 10rem; */
        /* min-width: 20rem; */
        width: `90%`,
        /* max-width: 30rem; */
        height: `85%`,
        /* margin-bottom: -74px; */
        /* max-height: 95%; */
        /* margin: 0 auto; */
        /* bottom: 69px; */
        display: `flex`
    }
    ,

    overlay: {
        backgroundColor: `rgb(46 42 42 / 0.66)`
    }
};
// };



function FeedPost(props) {
    const [postInfo, setPostInfo] = useState('')
    const test_url = 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/s960x960/122591384_3475114832573318_4257193317065004841_o.jpg?_nc_cat=1&ccb=2&_nc_sid=9e2e56&_nc_ohc=olZYvABB2N8AX87_xtD&_nc_ht=scontent-dfw5-2.xx&tp=7&oh=09b4f1efa2bc9d2fa320e0478444f4d5&oe=5FBF9555'
    const [reRender, setRerender] = useState(false)
    const [show, setShow] = useState(false)
    const [postDataId, setPostDataId] = useState("")

    const pid = props.post

    const showRerender = e => {
        setRerender(!reRender)
    }

    const handleClose = () => {
        setShow(false)
    }

    const handleClick = (e) => {
        e.preventDefault();
        //console.log(e.target.id)
        setPostDataId(e.target.id)
        setShow(true)
    }

    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/posts/${pid}`)
            try {

                if (res.ok) {
                    const data = await res.json()
                    setPostInfo(data)
                }
            } catch (err) {
                console.error(err)
            }
        })()

    }, [reRender])

    if (!postInfo) return null

    //postData is nested object of the actual data contained in postInfo
    const postData = postInfo.post


    const url = `/posts/${postData.id}`
    return (
        <>
            <div id={postData.id}
                className="feed-post" style={{
                    backgroundColor: 'white',
                    textAlign: "center",
                    border: "solid 2px #e7e7e7",
                    marginBottom: "20px",
                    marginTop: "15px"
                }}>
                <Header username={postData.user} userId={postData.id} />
                <button id={postData.id} onClick={handleClick} className="button"
                    style={{
                        border: "none",
                        height: `fit-content`,
                        padding: `0`,
                        lineHeight: `0`
                    }}>
                    <Photo pic={postData.photo_url} id={postData.id} />
                </button>
                <Icons postId={postData.id} willRerender={showRerender} caption={postData.caption} likes={postData.likes} like_count={postData.like_count} lat_like={postData.latest_like} />
                <CommentSection comments={postData.comments} names={postData.names} />
                <AddComment commentRerender={showRerender} post_id={postData.id} />
            </div>
            <Modal
                isOpen={show}
                onRequestClose={handleClose}
                style={customStyles}
                contentLabel='Modal'
            >
                <SinglePost postDataId={postDataId} />
            </Modal>
        </>
    )
}

export default FeedPost
