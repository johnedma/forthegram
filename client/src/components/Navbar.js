import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({currentUserId}) =>
    <nav className="navbar is-fixed-top" style={{ border: `1px solid #efefef` }}>
        <div className="navbar-brand" style={{ alignItems: `center` }}>
            <NavLink to="/" activeClassName="active"><h1 style={{ alignItems: `center`, fontSize: `24px` }}>Petstagram</h1></NavLink>
        </div>
        {/* <div className="navbar-menu is-active"> */}
        <div className="navbar-end" style={{
            display: `flex`,
            /* place-items: center; */
            alignItems: `center`
        }}>
            <>
                {currentUserId &&
                    <div className="navbar-item" >
                        <a href="/logout">
                            <span >Log Out</span>
                        </a>
                    </div>
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

export default Navbar;
