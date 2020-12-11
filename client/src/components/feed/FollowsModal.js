import React from "react";
import Modal from 'react-modal';
import Header from "./Header";

const FollowsModal = ({ show, handleClose, customStyles, handleClick, suggestions, follows }) => {
    return (
        <Modal
            isOpen={show}
            onRequestClose={handleClose}
            style={customStyles}
            contentLabel='Modal'
            handleClose={handleClose}
            suggestions={suggestions}
        >
            <>
                {/* <button onClick={handleClose}
                    style={{
                        // top: `-5px`,
                        // left: `180px`,
                        // position: `relative`,
                        position: `absolute`,
                        right: `25px`,
                        borderRadius: `1em`,
                        background: `none`,
                        border: `solid 2px black`
                    }}
                    >
                    <span style={{ fontWeight: `700` }}>X</span>
                </button> */}
                {(!follows.length) ? null :
                    <>
                        <div class="message">
                            <div class="message-header">
                                <p>Hello World</p>
                                <button onClick={handleClose} class="delete" aria-label="delete"></button>
                            </div>
                            <div class="message-body">
                                <h2>People that you are following</h2>
                                {follows.map(person => {
                                    return (
                                        <div key={person.id}>
                                            {person.user_name}
                                            <button onClick={handleClick} id={person.id}>Follow</button>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </>
                }
                {(!suggestions.length) ? null :
                    <>
                        <div class="message"
                            style={{ fontSize: `14px` }}
                        >
                            <div class="message-header"
                                style={{
                                    color: `#3273dd`,
                                    borderBottom: `solid 1px`,
                                    backgroundColor: `white`
                                }}>
                                <p style={{
                                    margin: `0 auto`, fontWeight: `700`,
                                    fontSize: `15px`
                                }}>Welcome To Petstagram!</p>
                                <button onClick={handleClose} class="delete" aria-label="delete" style={{
                                    position: `absolute`,
                                    right: `12px`
                                }}></button>
                            </div>
                            <div class="message-body"
                                style={{
                                    // color: `black`,
                                    borderBottom: `solid 1px`,
                                    backgroundColor: `white`
                                }}>
                                <p style={{
                                    marginBottom: `20px`,
                                    fontWeight: `700`,
                                    fontSize: `15px`
                                }}
                                >Suggestions to Follow</p>
                                <div>
                                    {suggestions.map(person => {
                                        //console.log(person);
                                        return (
                                            <div key={person.id}
                                                style={{
                                                    display: `flex`,
                                                    justifyContent: `space-between`,
                                                    alignItems: `center`,
                                                    margin: `-26px 0 0 -16px`
                                                }}
                                            >
                                                {/* {person.user_name} */}
                                                <Header username={person.user_name} />
                                                <button className="button is-info" onClick={handleClick} id={person.id}
                                                    style={{
                                                        // marginLeft: `20px`,
                                                        fontWeight: `600`,
                                                        padding: `12px`,
                                                        fontSize: `14px`,
                                                        height: `1.5em`
                                                    }}
                                                >Follow</button>
                                            </div>

                                        )
                                    })}
                                </div>
                                <button onClick={handleClose} className="button"
                                    style={{
                                        // top: `-5px`,
                                        // left: `180px`,
                                        // position: `relative`,
                                        // position: `absolute`,
                                        // right: `25px`,
                                        // bottom: `20px`
                                        borderRadius: `.5em`,
                                        background: `none`,
                                        // border: `solid 2px black`,
                                        padding: `.5em`,


                                        display: `flex`,
                                        margin: `0px auto`,
                                        // backgroundColor: `ghostwhite`

                                    }}
                                >
                                    <span style={{ fontWeight: `700` }}>
                                        Show Me The Pets!
                                        </span>
                                </button>
                            </div>
                        </div>
                        {/* </div> */}
                    </>
                }
            </>
        </Modal>
    )
}

export default FollowsModal
