import React from 'react';
import Post from './Post';

const Home = ({ currentUser }) => {
    return (
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
    );
};

export default Home;
