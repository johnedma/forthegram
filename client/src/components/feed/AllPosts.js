//Auth context
//api fetch followers/currentUserId
//get "follower-posts" from fetch call
//for each post, call a feed-post component

import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../../auth'
import FeedPost from './FeedPost'
// import Modal from 'react-modal';
import FollowsModal from './FollowsModal';


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
        flexDirection: "column",
        justifyContent: "center"
    }
};


function AllPosts() {
    const [followList, setFollowList] = useState([])
    // const [hasFollowers, setHasFollowers] useState(followList.length? true : false)
    const { currentUserId, currentUser } = useContext(AuthContext)
    const [show, setShow] = useState(!followList.length)
    const [suggestions, setSuggestions] = useState([]);
    const [currentProfile, setCurrentProfile] = useState(null);
    const [followStatus, setFollowStatus] = useState("");

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
                    } else {
                        const getSuggestions = await fetch('/api/users/')
                        if (getSuggestions.ok) {
                            const response = await getSuggestions.json()
                            setSuggestions(response.users)
                            console.log(response.users)
                        }
                    }

                }
            } catch (err) {
                console.error(err)
            }
        })()

    }, [setFollowList, show])

    const handleClose = () => {
        setShow(false)
        setFollowList([])
    }

    const handleClick = e => {
        console.log(e.target.id);
        async function addFollowing() {
            let res = await fetch("/api/profile/following", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    follower_id: currentUserId,
                    profile_id: e.target.id
                })
            })
            if (res.ok) {
                console.log("Success!");
            } else {
                console.log("failure");
            }

            res = await fetch(`/api/profile/${currentUser.user_name}`)
            try {
                if (res.ok) {
                    const data = await res.json()
                    // postInfo setter
                    setCurrentProfile(data)
                    data.followers.includes(currentUserId) ? setFollowStatus("Following") : setFollowStatus("Not Following")
                    // setFollowStatus(status);
                    // setFollowStatus(data.followers.includes(currentUserId));
                    console.log(followStatus);
                    // console.log(currentProfile.followers.includes(currentUserId))
                    // setFollowStatus(currentProfile.followers.includes(currentUserId) ? true : false)
                }
            } catch (err) {
                console.error(err)
            }

        }
        addFollowing();
        e.target.setAttribute("disabled", "disabled")
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
            <FollowsModal
                show={show}
                handleClose={handleClose}
                customStyles={customStyles}
                handleClick={handleClick}
                suggestions={suggestions}
                follows={followList}
            />
        </div>
    )
}


export default AllPosts
