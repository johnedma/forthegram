import React, { useContext } from 'react';
import '../grid.css'
import PostContext from "../PostContext";


const GridFeed = ({ currentProfile }) => {
    const { setUpdatedPosts } = useContext(PostContext);
    setUpdatedPosts(false);
    return (
        <div class="container" style={{}}>
            <div class="row">
                {currentProfile.posts.map(post =>
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
