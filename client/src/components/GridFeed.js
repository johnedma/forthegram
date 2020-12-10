import React, { useState, useContext } from 'react';
import '../grid.css'
import PostContext from "../PostContext";
import Modal from "react-modal"
import SinglePost from "./posts/SinglePost"

// const customStyles = {
//     content: {
//         top: '50%',
//         left: '50%',
//         right: 'auto',
//         bottom: 'auto',
//         marginRight: '-50%',
//         transform: 'translate(-50%, -50%)',
//         width: '910px',
//         height: '90vh',
//         borderRadius: "30px",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center"
//     }
// }

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
    },

    content: {
        border: '0',
        // borderRadius: '4px',
        borderRadius: "15px",
        bottom: 'auto',
        minHeight: '10rem',
        left: '50%',
        // padding: '2rem',
        position: 'fixed',
        right: 'auto',
        top: '50%',
        transform: 'translate(-50%,-50%)',
        minWidth: '20rem',
        // width: '80%',
        width: '60%',
        // maxWidth: '60rem',
        // maxWidth: '30rem',
        padding: `0`,
        // height: `60%`
        //
        top: `55%`,
        background: `rgb(255, 255, 255)`,
        /* overflow: auto; */
        /* min-height: 10rem; */
        /* min-width: 20rem; */
        width: `90%`,
        /* max-width: 30rem; */
        height: `85%`,
        /* margin-bottom: -74px; */
        /* max-height: 95%; */
        /* margin: 0 auto; */
        /* bottom: 69px; */
        display: `flex`
    }
    ,

    overlay: {
        backgroundColor: `rgb(46 42 42 / 0.66)`
    }
};

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
                            <button id={post.id} onClick={handleClick}
                                style={{
                                    border: "none",
                                    height: `fit-content`,
                                    padding: `0`,
                                    lineHeight: `0`,
                                    cursor: `pointer`
                                }}>
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
