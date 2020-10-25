import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () =>
    <nav className="navbar is-fixed-top">
        <div className="navbar-brand">
            <NavLink to="/" activeClassName="active"><h1>DeadPoetstagram</h1></NavLink>
        </div>
        <div className="navbar-menu is-active">
            <div className="navbar-end">

                {/* <div className="navbar-item">

                </div> */}
            </div>
        </div>
    </nav>

export default Navbar;
