//take post id and navigate to /post/pid route
//get all post info including user id
//implement signle post logic
//make feed posts clickable
//when post is clicked, navigate to posts/id front end route

import React from 'react'
import CommentSection from './CommentSection'
import Header from './Header'
import Icons from './Icons'
import Photo from './Photo'

function FeedPost() {
    const test_url = 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/s960x960/122591384_3475114832573318_4257193317065004841_o.jpg?_nc_cat=1&ccb=2&_nc_sid=9e2e56&_nc_ohc=olZYvABB2N8AX87_xtD&_nc_ht=scontent-dfw5-2.xx&tp=7&oh=09b4f1efa2bc9d2fa320e0478444f4d5&oe=5FBF9555'
    return (
        <div className="feed-post" style={{
            textAlign: "center",
            border: "solid 2px #e7e7e7",
            marginBottom: "150px",
            marginTop: "15px"
        }}>
            <Header />
            <a href="/api/posts/postId"><Photo pic={test_url}/></a>
            <Icons />
            <CommentSection />
        </div>
    )
}

export default FeedPost
