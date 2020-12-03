//Auth context
//api fetch followers/currentUserId
//get "follower-posts" from fetch call
//for each post, call a feed-post component

import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../../auth'
import FeedPost from './FeedPost'
import Modal from 'react-modal';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '610px',
        height: '90vh',
        borderRadius: "30px",
        display: "flex",
        justifyContent: "center"
    }
};


function AllPosts() {
    const [followList, setFollowList] = useState([])
    // const [hasFollowers, setHasFollowers] useState(followList.length? true : false)
    const { currentUserId } = useContext(AuthContext)
    const [show, setShow] = useState(followList.length === 0 ? true : false)

    console.log(show)

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`/api/following/${currentUserId}`)

                if (res.ok) {
                    const data = await res.json()
                    // shuffle(data.followerPosts[0])
                    setFollowList(data.followerPosts[0].sort(() => Math.random() - 0.5))
                    console.log(data);

                    // if (followList > 0) {
                    //     setShow(false)
                    // }
                }
            } catch (err) {
                console.error(err)
            }
        })()
    }, [setFollowList])

    // useEffect(() => {
    //     console.log("are we here?")
    //     if (followList > 0) {
    //         setShow(false)
    //     }
    // }, [])

    console.log(followList)
    const handleClose = () => {
        setShow(false)
    }
    // if (followList.length) {
    //     setShow(true)
    //     console.log("we made it")
    //     return
    // }

    return (
        <div>
            <div className="feed" style={{
                margin: "0 auto",
                width: "750px",
            }}>
                {
                    followList.map((pid, idx) =>
                        <FeedPost key={idx} post={pid} />
                    )}
            </div>
            <Modal
                isOpen={show}
                onRequestClose={handleClose}
                style={customStyles}
                contentLabel='Modal'
            >
                <p>HEllo User</p>
                {/* <div className='modal'>
                    <h1>
                        {name}
                    </h1>
                    <div id='links'>
                        <a href={links.github}>Github</a>
                        <a href={links.live}>Live</a>
                    </div>
                    <div className='modal_images'>
                        {pics.map((pic, idx) => (
                            <img
                                className='modal_img'
                                alt='Not Found'
                                src={pic}
                                key={idx}
                            />
                        ))}
                    </div>
                    <div id='details'>
                        {details}
                    </div>
                    <div id='tech'>
                        <h4>Tech Used</h4>
                        <div id='tech-items'>
                            {tech.map((i, idx) => (
                                <span className='item' key={idx}>{i}</span>
                            ))}
                        </div>
                    </div>
                </div> */}

            </Modal>
        </div>
    )
}


export default AllPosts
