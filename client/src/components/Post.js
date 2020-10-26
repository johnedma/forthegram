import React from 'react';
import Comments from './Comments';

const Post = ({ currentUser }) => {
    // 736 desktop breakpoint for post with photo in its own container to left, everything else to the right
    // 736 img container becomes 359x359
    //
    console.log(currentUser);
    console.log(currentUser.posts[0]);
    let post = currentUser.posts[0]

    return (
        <div>
            <header style={{ display: "flex", padding: `16px` }}>
                <img style={{ width: "32px", height: `32px`, verticaAlign: `middle`, borderRadius: `50%`, marginRight: `10px` }} src={currentUser.profilepic} />
                <div>{currentUser.user}</div>
            </header>
            <div>
                {/* <div className="center-cropped" style={{ backgroundImage: `url(${post.photo})` }} /> */}
                {/* <div style={{ backgroundImage: `url(${post.photo})` }} /> */}
                {/* <div style={{ backgroundImage: `url(require("images/img.svg"))` }} /> */}
                <img src={post.photo} style={{ width: `100%`, height: `auto` }}></img>
            </div>

            {/* <div>ui bar with heart comment paperplane share(start) (end)bookmark save</div> */}
            <div className="after-photo" style={{ padding: `16px` }} >
                <div className="level">
                    {/* <!-- Left side --> */}
                    <div className="level-left">
                        <div className="level-item">
                            <i className="far fa-heart"></i>
                        </div>
                        <div className="level-item">
                            <i className="far fa-comment"></i>
                        </div>
                        <div className="level-item">
                            <i className="far fa-paper-plane"></i>
                        </div>
                    </div>

                    {/* <!-- Right side --> */}
                    <div className="level-right">
                        <div className="level-item"><i className="far fa-bookmark"></i></div>
                    </div>
                </div>
                <div>{post.likes} likes</div>
                <Comments postComments={post.comments} />
                <div>July 31</div>
            </div>
        </div>
    );
};

export default Post;
