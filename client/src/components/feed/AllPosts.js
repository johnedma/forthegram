//Auth context
//api fetch followers/currentUserId
//get "follower-posts" from fetch call
//for each post, call a feed-post component

import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../../auth'
import FeedPost from './FeedPost'

function AllPosts() {
    const [followList, setFollowList] = useState([])
    const { currentUserId } = useContext(AuthContext)

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`/api/following/${currentUserId}`)

                if (res.ok) {
                    const data = await res.json()
                    // shuffle(data.followerPosts[0])
                    setFollowList(data.followerPosts[0].sort(() => Math.random() - 0.5))
                    console.log(data);
                }
            } catch (err) {
                console.error(err)
            }
        })()
    }, [setFollowList])
    if (!followList) return

    return (
        <div className="feed" style={{
            margin: "0 auto",
            width: "750px",
        }}>
            {followList.map((pid, idx) =>
                <FeedPost key={idx} post={pid} />
            )}
        </div>
    )
}

export default AllPosts
