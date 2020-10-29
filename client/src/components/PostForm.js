import React from 'react';
import Photo from './Photo';

const PostForm = ({ currentUserId }) => {
    return (
        <div>
            <Photo currentUserId={currentUserId} />
        </div>
    );
};

export default PostForm;
