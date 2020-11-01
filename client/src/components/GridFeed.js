import React from 'react';
import '../grid.css'

const GridFeed = ({ currentUser }) => {
    return (
        <div class="container" style={{}}>
            <div class="row">
                {currentUser.posts.map(post =>
                    <div className='col'>
                        <div class="ratio-square">
                            <img src={post.photo} key={post.postId} />
                        </div>
                    </div>)}
            </div>
        </div>
    );
}
export default GridFeed;
