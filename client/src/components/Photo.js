import React from 'react';


const Photo = props => {

    return (
        <div>
            <form method="POST" action="/api/posts/" enctype="multipart/form-data" >
                <input type="file" name="file" />
                <input type='text' name='caption' placeholder='write a caption...'/>
                <input type='submit' value="Upload" />
            </form>
        </div>
    )
}

export default Photo;