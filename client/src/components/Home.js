import React from 'react';
import { Link, Route } from 'react-router-dom';
import Post from './Post';
import PostForm from './PostForm'

const Home = ({ currentUser }) => {



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
                {currentUser.posts.map(post =>
                    <div style={{
                        alignSelf: `stretch`,
                        margin: `20px 50px`
                    }}>
                        <Post currentUser={currentUser} post={post} />
                    </div>
                )}
            </div>

            <button id="post-button" onClick={() => <Route to='/create-post' component={PostForm} />}>+</button>

        </>
    );
};

export default Home;
