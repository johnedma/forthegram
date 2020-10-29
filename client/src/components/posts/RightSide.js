import React from 'react'
import AddComment from './AddComment'
import CommentSection from './CommentSection'
import Header from './Header'
import Icons from './Icons'
import LikedBy from './LikedBy'

function rightSide(props) {
    return (
        <div>
            <Header />
            <Icons />
            <LikedBy />
            <CommentSection />
            <AddComment />
        </div>
    )
}

export default rightSide
