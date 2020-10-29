import React from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import Post from './Post';
import PostForm from './PostForm'

const Home = ({ currentUserId }) => {

    return (
        <>
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

            <button id="post-button" onClick={() => window.location.href = './create-post'} >+</button>

        </>
    );
};

export default Home;
