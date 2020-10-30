//Auth context
//api fetch followers/currentUserId
//get "follower-posts" from fetch call
//for each post, call a feed-post component

import React from 'react'
import FeedPost from './FeedPost'

function AllPosts() {
    return (
        <div>
            <FeedPost />
        </div>
    )
}

export default AllPosts
