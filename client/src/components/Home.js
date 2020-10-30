
import React, { useState, useContext } from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import Post from './Post';
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
};

export default Home;