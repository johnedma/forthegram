import React from 'react';
import Post from './Post';

const Home = ({ currentUser }) => {
    return (
        <div>
            {currentUser.posts.map(post =>
                <div><Post currentUser={currentUser} post={post} /></div>
            )}
        </div>
    );
};

export default Home;
