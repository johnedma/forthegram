import React, { useState, useContext } from 'react';
import '../grid.css'
import PostContext from "../PostContext";
import Modal from "react-modal"
import SinglePost from "./posts/SinglePost"

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '910px',
        height: '90vh',
        borderRadius: "30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    }
}

const GridFeed = ({ currentProfile }) => {
    const { setUpdatedPosts } = useContext(PostContext);
    const [show, setShow] = useState(false)
    const [postDataId, setPostDataId] = useState("")
    setUpdatedPosts(false);

    const handleClose = () => {
        setShow(false)
    }

    const handleClick = (e) => {
        e.preventDefault();
        console.log(e.target.id)
        setPostDataId(e.target.id)
        setShow(true)
    }

    return (
        <div class="container" style={{}}>
            <div class="row">
                {currentProfile.posts.map(post =>
                    <div className='col'>
                        <div class="ratio-square">
                            <button id={post.id} onClick={handleClick}>
                                <img src={post.photo_url} id={post.id} key={post.id} />
                            </button>
                        </div>
                    </div>)}
            </div>
            <Modal
                isOpen={show}
                onRequestClose={handleClose}
                style={customStyles}
                contentLabel='Modal'
            >
                <SinglePost postDataId={postDataId} />
            </Modal>
        </div>
    );
}
export default GridFeed;
