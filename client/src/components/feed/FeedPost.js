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
    return (
        <div>
            <h1>I'm a post!</h1>
            <Header />
            <Photo />
            <Icons />
            <CommentSection />
        </div>
    )
}

export default FeedPost
