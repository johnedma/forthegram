
import React, { useState, useContext } from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import Post from './Post';
import PostForm from './PostForm'
import { useHistory } from 'react-router-dom'
import AuthContext from "../auth"
import ReactDOM from 'react-dom';
import ModalWindow from './ModalWindow';

const Home = () => {
    const [show, setShow] = useState(false);
    let history = useHistory();
    const [preview, setPreview] = useState('')
    const { currentUserId } = useContext(AuthContext)
    const [file, setFileName] = useState("");
    const [caption, setCaption] = useState("");
    const [errors, setErrors] = useState([]);

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    // Make the following an IIFE?
    // async function submitForm() {
    //     let formData = new FormData();
    //     formData.append('file', file);
    //     let captionURI = encodeURIComponent(caption)
    //     console.log(captionURI)
    //     const response = await fetch(`/api/posts/${currentUserId}/${captionURI}`, {
    //         method: 'POST',
    // headers: {
    //     "Content-Type": "multipart/form-data",
    //     "type": "formData"
    // },

    //             body: formData
    //         });
    //         const responseData = await response.json();
    //         if (!response.ok) {
    //             setErrors(responseData.errors);
    //         } else {
    //             console.log(responseData)

    //             history.push('/')
    //         }
    //     }
    //     submitForm();
    // }

    // const handleImage = e => {
    //     setShow(true)

    // }

    // const renderPopOut = () => {
    //     if (modalWindow) {
    //         let root = modalWindow.document.body;
    //         ReactDOM.render(
    // <div className="post-form-container">
    //     {errors.length ? errors.map((err) => <li key={err} >{err}</li>) : ''}
    //     <h2 className="create-post-headline">New Post</h2>
    //     <form id="post-create-form" onSubmit={handleSubmit} encType="multipart/form-data">
    //         {file ? <img src={preview} id="img-post" /> : <input type="file" name="file" onChange={handleImage} />}
    //         {file ? <textarea id="caption-field" onChange={(e) => setCaption(e.target.value)}
    //             name="caption" wrap="hard" rows="5" cols="33" placeholder="Write a Caption..." /> : ''}
    //         {caption ? <button id="create-post-button" type='submit'>Share</button> : ''}

    //     </form>
    // </div>, root);
    //     }
    // }

    const showModal = e => {
        setShow(!show)
    }
    return (
        <div className="home-div">
            <div style={{
                display: `flex`,
                flexDirection: `column`,
                /* justify-content: center; */
                // textAlign: `-webkit-center`,
                alignSelf: `stretch`
                // text-align: -webkit-center;
            }}>
                {/* {currentUser.posts.map(post =>
                    <div style={{
                        alignSelf: `stretch`,
                        margin: `20px 50px`
                    }}>
                        <Post currentUser={currentUser} post={post} />
                    </div>
                )} */}
                <h1>Home</h1>
            </div>
            <h2>Test</h2>
            <ModalWindow onClose={showModal} show={show} />
            {show ? "" : <button id="post-button" onClick={showModal} >+</button>}
            <h2>Test</h2>


        </div>
    );
    // () => window.location.href = './create-post'
};

export default Home;