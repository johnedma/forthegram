import React from 'react';


const Photo = props => {

    return (
        <div class="post-form-container">
            <h2 class="create-post-headline">New Post</h2>
            <form id="post-create-form" method="POST" action="/api/posts/" enctype="multipart/form-data" >

                <input type="file" name="file" />
                <textarea id="caption-field" wrap="hard" rows="5" cols="33" placeholder="Write a Caption..." />
                <button id="create-post-button" type='submit'>Share</button>
            </form>
        </div>
    )
}

export default Photo;