import React, { useContext, useEffect, useState } from 'react'// import GridFeed from "./GridFeed"
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import GridFeed from './GridFeed';
import AuthContext from "../auth"

const Profile = ({ match }) => {
    // in Profile currentProfile is really "current profile being viewed"
    const { currentUserId } = useContext(AuthContext)
    console.log(currentUserId);
    const [currentProfile, setCurrentProfile] = useState(null)
    const [followStatus, setFollowStatus] = useState("")
    let username = match.params.profile
    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/profile/${username}`)
            try {

                if (res.ok) {
                    const data = await res.json()
                    // postInfo setter
                    setCurrentProfile(data)
                    data.followers.includes(currentUserId) ? setFollowStatus("Following") : setFollowStatus("Not Following")
                    // setFollowStatus(status);
                    // setFollowStatus(data.followers.includes(currentUserId));
                    console.log(followStatus);
                    // console.log(currentProfile.followers.includes(currentUserId))
                    // setFollowStatus(currentProfile.followers.includes(currentUserId) ? true : false)
                }
            } catch (err) {
                console.error(err)
            }
        })()
    }, [username, followStatus])
    if (!currentProfile) return null
    // console.log(currentProfile.followers.includes(currentUserId))
    // const [followStatus, setFollowStatus] = useState(currentProfile.followers.includes(currentUserId))
    // currentProfile.followers.includes(currentUserId) setFollowStatus(true)

    // send and qurey currentProfile.user.id currentUserId
    // const updateFollowStatus = e =>{
    //         if (currentProfile.followers.includes(currentUserId)){
    //             let req="post"
    //     async () => {
    //         const res = await fetch(`/api/profile/${username}`)
    //         try {

    //             if (res.ok) {
    //                 const data = await res.json()
    //                 // postInfo setter
    //                 setCurrentProfile(data)
    //             }
    //         } catch (err) {
    //             console.error(err)
    //         }
    //         else const res = await fetch(`/api/profile/${username}`)
    //         try {

    //             if (res.ok) {
    //                 const data = await res.json()
    //                 // postInfo setter
    //                 setCurrentProfile(data)
    //             }
    //         } catch (err) {
    //             console.error(err)
    //         }
    //     }
    // }


    const followUser = async () => {
        console.log("plugged in to follow");
        const data = {
            profile_id: currentProfile.user.id,
            follower_id: currentUserId
        }
        try {
            const res = await fetch(`/api/profile/follow`, {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            if (!res.ok) {
                console.log(res)
            }
            setFollowStatus("Following")
            console.log(res)
        } catch (e) {
            console.error(e)
        }
    }

    // const followUser = () => {
    //     console.log(currentProfile.followers);
    //     currentProfile.followers.push(currentUserId)
    //     console.log(currentProfile.followers);
    //     return
    // }

    const unfollowUser = async () => {
        console.log("plugged in to unfollow");
        const data = {
            profile_id: currentProfile.user.id,
            follower_id: currentUserId
        }
        try {
            const res = await fetch(`/api/profile/unfollow`, {
                method: "DELETE",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            if (!res.ok) {
                console.log(res)
            }
            //    console.log(res.json())
            setFollowStatus("Follow")
        } catch (e) {
            console.error(e)
        }
    }

    console.log(currentProfile);
    return (
        <main style={{
            backgroundColor: `#fafafa`,
            // display: `flex`,
            // flexDirection: `column`
        }}>
            <div style={{
                padding: `30px 20px 0`,
                // width: `calc(100% - 40px)`,
                // margin: `0 auto 30px`,
                // maxWidth: `935px`,
                // alignItems: `stretch`,
                border: `0 solid #000`,

            }}>
                <header style={{
                    display: `flex`,
                    margin: `0 auto`,
                    marginBottom: `44px`,
                    flexDirection: `row`,
                    maxWidth: `fit-content`
                }}>
                    <div style={{
                        // flexGrow: `1`,
                        marginRight: `30px`
                    }}>
                        <div style={{
                            alignItems: `center`,
                            // -webkit-align-self: `center`,
                            // -ms-flex-item-align: center;
                            alignSelf: `center`,
                            display: `block`
                        }}>
                            <span style={{
                                width: `150px`,
                                height: `150px`,
                                backgroundColor: `#fafafa`,
                                borderRadius: `50%`,
                                display: `block`,
                                // -webkit-box-flex: 0;
                                // -webkit-flex: 0 0 auto;
                                // -ms-flex: 0 0 auto;
                                flex: `0 0 auto`,
                                overflow: `hidden`,
                                position: `relative`
                            }}>
                                <img src='https://images.unsplash.com/photo-1526660690293-bcd32dc3b123?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80' style={{
                                    // <img src={currentProfile.profilepic} style={{
                                    height: `100%`,
                                    // -webkit-touch-callout: none;
                                    width: `100%`,
                                    objectFit: `cover`
                                }} />
                            </span>
                            {/* </div> */}
                        </div>
                    </div>
                    <section style={{
                        // height: `100%`,
                        // -webkit-touch-callout: none;
                        width: `100%`,
                        // objectFit: `cover`
                    }}>
                        <div style={{
                            display: `flex`,
                            marginBottom: `20px`,
                            alignItems: `center`
                        }}>
                            <h2 style={{
                                fontSize: `28px`,
                                lineHeight: `32px`,
                                margin: `-5px 0 -6px`,
                                color: `#262626`
                            }}>{currentProfile.user.user_name}</h2>

                            {currentProfile.user.id === currentUserId ?
                                <button disabled className="button is-info" style={{
                                    marginLeft: `20px`,
                                    fontWeight: `600`
                                }}>
                                    Follow
                                    {/* {currentProfile.followers.includes(currentUserId) ? "Following" : "Follow"} */}
                                    {/* {followStatus ? "Following" : "Follow"} */}
                                </button>
                                :
                                <button className="button is-info"
                                    onClick={currentProfile.followers.includes(currentUserId) ? () => unfollowUser() : () => followUser()}
                                    style={{
                                        marginLeft: `20px`,
                                        fontWeight: `600`
                                    }}>
                                    {/* Follow */}
                                    {currentProfile.followers.includes(currentUserId) ?
                                        "Following"
                                        : "Follow"}
                                    {/* {console.log(followStatus)} */}
                                    {/* {followStatus ? "Following" : "Follow"} */}
                                </button>
                            }
                        </div>
                        <div style={{
                            display: `flex`,
                            marginBottom: `20px`,
                            alignItems: `center`
                        }}>
                            <div class="" style={{
                                fontSize: `16px`,
                                marginRight: `40px`
                            }}>
                                {/* <div> */}
                                <a href={`${currentProfile.user.user_name}/feed`}>
                                    <span style={{
                                        fontWeight: `bold`
                                    }}>{currentProfile.posts.length} </span>
                                posts
                                {/* </div> */}
                                </a>
                            </div>
                            <div class="" style={{
                                fontSize: `16px`,
                                marginRight: `40px`
                            }}>
                                {/* <div> */}
                                <a href={`${currentProfile.user.user_name}/followers`}>
                                    <span style={{
                                        fontWeight: `bold`
                                    }}>{currentProfile.followers.length} </span>
                                 followers
                                </a>
                                {/* </div> */}
                            </div>
                            <div class="" style={{
                                fontSize: `16px`,
                                marginRight: `40px`
                            }}>
                                {/* <div> */}
                                <a href={`${currentProfile.user.user_name}/following`}>
                                    <span style={{
                                        fontWeight: `bold`
                                    }}>{currentProfile.following.length} </span>
                                 following
                                </a>
                                {/* </div> */}
                            </div>

                        </div>
                        <div>
                            <span>{currentProfile.user.full_name}</span>
                            <br />
                            <span>{currentProfile.user.bio ? currentProfile.user.bio : currentProfile.user.email}</span>
                        </div>
                    </section>
                </header>
                <div className='row-container'>
                    <GridFeed currentProfile={currentProfile} />
                </div>
            </div>
        </main>
    );
};

export default Profile;
