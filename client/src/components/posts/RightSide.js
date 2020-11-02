import React from 'react'
import AddComment from './AddComment'
import CommentSection from './CommentSection'
import Header from './Header'
import Icons from './Icons'

function rightSide() {
    return (
        <div>
            <Header />
            <CommentSection />
            <AddComment />
            <Icons />
        </div>
    )
}

export default rightSide
