import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Modal from 'react-modal';
import ModalWindow from './ModalWindow';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '610px',
        height: '75%',
        borderRadius: "30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    }
};

const Navbar = ({ currentUserId, currentUser }) => {
    const [show, setShow] = useState(false);


    const showModal = e => {
        setShow(true)
    }

    const handleClose = () => {
        setShow(false)
    }

    return (
        <nav className="navbar is-fixed-top" style={{ border: `1px solid #efefef` }}>
            <div className="navbar-brand" style={{ alignItems: `center` }}>
                <NavLink to="/" activeClassName="active"><h1 style={{ alignItems: `center`, fontSize: `24px` }}>Petstagram</h1></NavLink>
            </div>
            <div className="navbar-end" style={{
                display: `flex`,
                alignItems: `center`
            }}>
                <>
                    {currentUserId && currentUser &&
                        <>
                            {/* <ModalWindow onClose={showModal} show={show} /> */}
                            <Modal
                                isOpen={show}
                                onRequestClose={handleClose}
                                style={customStyles}
                                contentLabel='Modal'
                            >
                                <ModalWindow handleClose={handleClose} />
                            </Modal>
                            {show ? "" : <button className="navbar-item" onClick={showModal} style={{
                                background: `white`,
                                color: `rgb(50, 115, 220)`,
                                borderRadius: `2em`,
                                border: `2px solid`,
                                cursor: `pointer`,
                                fontSize: `1.3em`,
                                padding: `5px`,
                                lineHeight: `20px`,
                                margin: `0`
                            }}>
                                <i className="fas fa-cloud-upload-alt"></i>
                                {/* Create Post */}
                            </button>}
                            <div className="navbar-item" >
                                <a href={`/${currentUser.user_name}`}>
                                    {currentUser.user_name}
                                </a>
                            </div>
                            <div className="navbar-item" >
                                <a href="/edituser">
                                    <span >Account Details</span>
                                </a>
                            </div>
                            <div className="navbar-item" >
                                <a href="/logout">
                                    <span >Log Out</span>
                                </a>
                            </div>
                        </>
                    }
                    {!currentUserId &&
                        <>
                            <div className="navbar-item">
                                <a className="button has-background-link has-text-white" href="/login" style={{
                                    height: `2rem`,
                                    paddingLeft: `.5em`,
                                    paddingRight: `.5em`
                                }}>
                                    <span>Log In</span>
                                </a>
                            </div>
                            <div className="navbar-item" >
                                <a href="/signup">
                                    <span >Sign Up</span>
                                </a>
                            </div>
                        </>
                    }
                </>
            </div>
            {/* </div> */}
        </nav>
    )
}
export default Navbar;
