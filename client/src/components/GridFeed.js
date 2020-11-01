import React from 'react';
import '../grid.css'

const GridFeed = ({ currentUser }) => {
    return (
        <div class="container" style={{}}>
            <div class="row">
                {currentUser.posts.map(post =>
                    <div className='col'>
                        <div class="ratio-square">
                            <a href={`/posts/${post.id}`}     >
                                <img src={post.photo_url} key={post.id} />
                            </a>
                        </div>
                    </div>)}
            </div>
        </div>
    );
}
export default GridFeed;
