import React, { useContext, useEffect, useState } from 'react'// import GridFeed from "./GridFeed"
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import GridFeed from './GridFeed';

const Profile = ({ match }) => {

    // const currentUser = {
    //     user: '2pac',
    //     profilepic: 'https://i2-prod.mirror.co.uk/incoming/article7510500.ece/ALTERNATES/s1200b/0_MAIN-tupac.jpg',
    //     followers: '37M',
    //     following: 0,
    //     name: 'Tupac Shakur',
    //     bio: 'Everybodys at war with different things...Im at war with my own heart sometimes.',
    //     posts: [

    //         {
    //             postId: "aaa",
    //             photo: "https://images.unsplash.com/photo-1581131131269-5ccc5e08f692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
    //             // photo: "https://images.unsplash.com/photo-1581131131269-5ccc5e08f692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
    //             likes: "57",
    //             comments: [
    //                 {
    //                     user: '2pac',
    //                     comment: 'I make mistakes but learn from everyone. And when it’s said and done, I bet this brother be a better one. If I upset you, don’t stress. Never forget that God isn’t finished with me yet. - Ghetto Gospel feat Elton John'
    //                     , createdAt: "Oct 5th",
    //                     profilepic: 'https://i2-prod.mirror.co.uk/incoming/article7510500.ece/ALTERNATES/s1200b/0_MAIN-tupac.jpg',
    //                 },
    //                 {
    //                     user: 'johnjohn',
    //                     comment: "trilla"
    //                     , createdAt: "Oct 5th",
    //                     profilepic: 'https://i2-prod.mirror.co.uk/incoming/article7510500.ece/ALTERNATES/s1200b/0_MAIN-tupac.jpg',
    //                 },
    //                 {
    //                     user: "pk",
    //                     comment: "birdhouses are trill too"
    //                     , createdAt: "Oct 5th",
    //                     profilepic: 'https://i2-prod.mirror.co.uk/incoming/article7510500.ece/ALTERNATES/s1200b/0_MAIN-tupac.jpg',
    //                 },
    //                 {
    //                     user: "tynaaaaaa",
    //                     comment: "t in Tyna stands for trill, duh"
    //                     , createdAt: "Oct 5th",
    //                     profilepic: 'https://i2-prod.mirror.co.uk/incoming/article7510500.ece/ALTERNATES/s1200b/0_MAIN-tupac.jpg',
    //                 },
    //                 {
    //                     user: "adawg",
    //                     comment: "......."
    //                     , createdAt: "Oct 5th",
    //                     profilepic: 'https://i2-prod.mirror.co.uk/incoming/article7510500.ece/ALTERNATES/s1200b/0_MAIN-tupac.jpg',
    //                 }
    //             ],
    //             hashtag: null
    //         },
    //         {
    //             postId: "aab",
    //             caption: 'Strength is overcome by weakness. Joy is overcome by pain. The night is overcome by brightness. And love—it remains the same. —Untitled #3',
    //             photo: "https://images.unsplash.com/photo-1583353858816-0b5850f04adf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
    //             likes: "107",
    //             comments: [
    //                 {
    //                     user: 'johnjohn',
    //                     comment: "trilla"
    //                 },
    //                 {
    //                     user: "pk",
    //                     comment: "birdhouses are trill too"
    //                 },
    //                 {
    //                     user: "tynaaaaaa",
    //                     comment: "t in Tyna stands for trill, duh"
    //                 },
    //                 {
    //                     user: "adawg",
    //                     comment: "......."
    //                 }
    //             ],
    //             hashtag: null
    //         },
    //         {
    //             postId: "aac",
    //             caption: 'I exist in the depths of solitude pondering my true goal. Trying 2 find peace of mind and still preserve my soul.” —In the Depths of Solitude',
    //             photo: "https://images.unsplash.com/photo-1603456372099-2e63deb29f9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
    //             likes: "7",
    //             comments: [
    //                 {
    //                     user: 'johnjohn',
    //                     comment: "trilla"
    //                 },
    //                 {
    //                     user: "pk",
    //                     comment: "birdhouses are trill too"
    //                 },
    //                 {
    //                     user: "tynaaaaaa",
    //                     comment: "t in Tyna stands for trill, duh"
    //                 },
    //                 {
    //                     user: "adawg",
    //                     comment: "......."
    //                 }
    //             ],
    //             hashtag: null
    //         },
    //         {
    //             postId: "aad",
    //             caption: 'Even though you’re fed up, you gotta keep your head up. - Keep Ya Head Up',
    //             photo: "https://images.unsplash.com/photo-1603399880311-c20aa9c29caa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
    //             likes: "1007",
    //             comments: [
    //                 {
    //                     user: 'johnjohn',
    //                     comment: "trilla"
    //                 },
    //                 {
    //                     user: "pk",
    //                     comment: "birdhouses are trill too"
    //                 },
    //                 {
    //                     user: "tynaaaaaa",
    //                     comment: "t in Tyna stands for trill, duh"
    //                 },
    //                 {
    //                     user: "adawg",
    //                     comment: "......."
    //                 }
    //             ],
    //             hashtag: null
    //         },
    //     ]
    // }

    const [currentUser, setCurrentUser] = useState(null)
    let username = match.params.profile
    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/profile/${username}`)
            try {

                if (res.ok) {
                    const data = await res.json()
                    // postInfo setter
                    setCurrentUser(data)
                }
            } catch (err) {
                console.error(err)
            }
        })()
    }, [username])
    if (!currentUser) return null


    console.log(currentUser);
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
                <header style={{ display: `flex`, marginBottom: `44px`, flexDirection: `row` }}>
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
                            {/* <div style={{
                                // position: `absolute`,
                                top: `-9px`,
                                left: `-9px`,
                                width: `168px`,
                                height: `168px`
                            }}> */}
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
                                    // <img src={currentUser.profilepic} style={{
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
                            }}>{currentUser.user.user_name}</h2>
                            <button className="button is-info" style={{
                                marginLeft: `20px`,
                                fontWeight: `600`
                            }}>Follow</button>
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
                                <a href={`${currentUser.user.user_name}/feed`}>
                                    <span style={{
                                        fontWeight: `bold`
                                    }}>{currentUser.posts.length} </span>
                                posts
                                {/* </div> */}
                                </a>
                            </div>
                            <div class="" style={{
                                fontSize: `16px`,
                                marginRight: `40px`
                            }}>
                                {/* <div> */}
                                <a href={`${currentUser.user.user_name}/followers`}>
                                    <span style={{
                                        fontWeight: `bold`
                                    }}>{currentUser.followers.length} </span>
                                 followers
                                </a>
                                {/* </div> */}
                            </div>
                            <div class="" style={{
                                fontSize: `16px`,
                                marginRight: `40px`
                            }}>
                                {/* <div> */}
                                <a href={`${currentUser.user.user_name}/following`}>
                                    <span style={{
                                        fontWeight: `bold`
                                    }}>{currentUser.following.length} </span>
                                 following
                                </a>
                                {/* </div> */}
                            </div>

                        </div>
                        <div>
                            <span>{currentUser.user.full_name}</span>
                            <br />
                            <span>{currentUser.user.bio ? currentUser.user.bio : currentUser.user.email}</span>
                        </div>
                    </section>
                </header>
                <div className='row-container'>
                    <GridFeed currentUser={currentUser} />
                </div>
            </div>
        </main>
    );
};

export default Profile;
