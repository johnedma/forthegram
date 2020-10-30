//Auth context
//api fetch followers/currentUserId
//get "follower-posts" from fetch call
//for each post, call a feed-post component

import React from 'react'
import FeedPost from './FeedPost'

function AllPosts() {
    const followers_lst = [1,2,3,4,5,6,7]
    return (
        <div className="feed" style={{
            margin: "0 auto",
            width: "750px",
        }}>
            {followers_lst.map((follower,idx) =>
                <FeedPost />
            )}
        </div>
    )
}

export default AllPosts
