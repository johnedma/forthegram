import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () =>
<<<<<<< HEAD
    <nav className="navbar is-fixed-top" style={{ border: `1px solid #efefef` }}>
        <div className="navbar-brand" style={{ alignItems: `center` }}>
            <NavLink to="/" activeClassName="active"><h1 style={{ alignItems: `center`, fontSize: `24px` }}>Petstagram</h1></NavLink>
=======
    <nav className="navbar is-fixed-top">
        <div className="navbar-brand">
            <NavLink to="/" activeClassName="active"><h1>petstagram</h1></NavLink>
>>>>>>> main
        </div>
        <div className="navbar-menu is-active">
            <div className="navbar-end">

                {/* <div className="navbar-item">

                </div> */}
            </div>
        </div>
    </nav>

export default Navbar;
