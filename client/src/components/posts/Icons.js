import React, { useContext } from 'react';
import PostContext from '../../PostContext';


function Icons() {
    const data = useContext(PostContext)
    const post = data.postData.post
    const likes = post.likes
    const like_count = post.like_count
    const latest_like = post.latest_like
    return (
        <>
            <div className="after-photo" style={{ padding: `0 16px` }} >
                <div className="level" style={{ marginBottom: `0` }}>
                    {/* <!-- Left side --> */}
                    <div className="level-left" >
                        <div className="level-item">
                            <button className="fontawe">
                                <i className="fas fa-paw"></i>
                            </button>
                        </div>
                        <div className="level-item">
                            <button className="fontawe">
                                <i className="far fa-comment"></i>
                            </button>
                        </div>
                        <div className="level-item">
                            <button className="fontawe">
                                <i className="fas fa-feather-alt"></i>
                                {/* <i className="far fa-paper-plane"></i> */}
                            </button>
                        </div>
                    </div>

                    {/* <!-- Right side --> */}
                    <div className="level-right" style={{ marginTop: `0` }}>
                        <div className="level-item">
                            <button className="fontawe">
                                <i className="far fa-bookmark"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                    <button style={{
                        backgroundColor: `#fff`,
                        border: `none`,
                        fontWeight: `800`,
                        fontSize: `1em`,
                        padding: `16px 0`
                    }}>
                        {/* replace with likes from post */}
                        {latest_like} and {like_count - 1} others liked this
                    </button>
                </div>
        </>
    )
}

export default Icons