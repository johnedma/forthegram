import React from 'react'
import FeedPost from './FeedPost'

function Icons({ caption, likes, like_count, lat_like}) {
    const temp_postId = 5
    const temp_like_count = 322
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
            {/* replace with like count from post */}
            {like_count === 0 ? <div>
                <button style={{
                        backgroundColor: `#fff`,
                        border: `none`,
                        fontWeight: `800`,
                        fontSize: `1em`,
                        padding: `16px 0`
                    }}>
                    Be the first to like this!
                </button>
            </div>:
            <div style={{
                textAlign: "left",
                marginLeft: "20px"
            }}>
                    <div style={{
                        backgroundColor: `#fff`,
                        border: `none`,
                        fontWeight: `800`,
                        fontSize: `1em`,
                        padding: `16px 0`,
                    }}>{caption}</div>
                    <button style={{
                        backgroundColor: `#fff`,
                        border: `none`,
                        fontWeight: `800`,
                        fontSize: `1em`,
                        padding: `16px 0`,
                        color: "#489dcf"

                    }}>
                        {/* replace with likes from post  and latest like*/}

                        {lat_like} and {like_count} others liked this
                    </button>
                </div>
            }
        </>
    )
}

export default Icons
