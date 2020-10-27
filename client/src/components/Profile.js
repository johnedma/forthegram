import React from 'react';
import GridFeed from "./GridFeed"

const Profile = ({ currentUser }) => {
    console.log(currentUser);
    return (
        <main style={{
            backgroundColor: `#fafafa`,
            display: `flex`,
            flexDirection: `column`
        }}>
            <div style={{
                padding: `30px 20px 0`,
                width: `calc(100% - 40px)`,
                margin: `0 auto 30px`,
                maxWidth: `935px`,
                alignItems: `stretch`,
                border: `0 solid #000`,

            }}>
                <header style={{ marginBottom: `44px`, flexDirection: `row` }}>
                    <div style={{
                        flexGrow: `1`,
                        marginRight: `30px`
                    }}>
                        <div style={{
                            alignItems: `center`,
                            // -webkit-align-self: `center`,
                            // -ms-flex-item-align: center;
                            alignSelf: `center`,
                            display: `block`
                        }}>
                            <div style={{
                                // position: `absolute`,
                                top: `-9px`,
                                left: `-9px`,
                                width: `168px`,
                                height: `168px`
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
                                    <img src={currentUser.profilepic} style={{
                                        height: `100%`,
                                        // -webkit-touch-callout: none;
                                        width: `100%`
                                    }} />
                                </span>
                            </div>
                        </div>
                    </div>
                    <section>
                        <div>
                            <div>{currentUser.user}</div>
                            <button className="has-info">Follow</button>
                        </div>
                        <level></level>
                        <div>
                            <h1>Current User</h1><br />
                            <span>Current User Witty Profile Bio</span>
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
