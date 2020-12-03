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
                    if (data.following.length) {
                        setShow(false)
                    }

                }
            } catch (err) {
                console.error(err)
            }
        })()

    }, [setFollowList])

    const handleClose = () => {
        setShow(false)
    }

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
                <h2>Suggestions to Follow</h2>


            </Modal>
        </div>
    )
}


export default AllPosts
