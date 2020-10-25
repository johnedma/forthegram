import React from 'react';

const Post = ({ poet }) => {
    // 736 desktop breakpoint for post with photo in its own container to left, everything else to the right
    console.log(poet.username);
    console.log(poet.posts[0]);
    return (
        <div>
            <div>ProfilePic * username (left) (rightend) elipsis</div>
            <div>post photo</div>
            <div>ui bar with heart comment paperplane share(start) (end)bookmark save</div>
            <div>caption div with username and caption</div>
            <div>comments</div>
            <div>datecreated</div>

        </div>
    );
};

export default Post;
