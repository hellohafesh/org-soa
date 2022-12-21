import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const menuitem = <React.Fragment>
        <li><Link to="/">Home</Link></li>
        <li tabIndex={0}>
            <Link>
                About
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </Link>
            <ul className="p-2  bg-base-300">
                <li><Link to="/">Our Organization</Link></li>
                <li><Link to="/">Executive Committee</Link></li>
                <li><Link to="/">National Team</Link></li>
                <li><Link to="/">Core Team</Link></li>
                <li><Link to="/">Our Volunteer</Link></li>
            </ul>
        </li>
        <li tabIndex={0}>
            <Link>
                Get Involved
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </Link>
            <ul className="p-2  bg-base-300">
                <li><Link to="/">Sponsor a Child</Link></li>
                <li><Link to="/">Apply For Volunteer</Link></li>
                <li><Link to="/">Apply For Partnership</Link></li>
            </ul>
        </li>
        <li tabIndex={0}>
            <Link>
                Activity
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </Link>
            <ul className="p-2  bg-base-300">
                <li><Link to="/">Our Projects</Link></li>
                <li><Link to="/">Event</Link></li>
                <li><Link to="/">News</Link></li>
            </ul>
        </li>

        <li><Link to="/">Notice</Link></li>
        <li><Link to="/login">Login</Link></li>
    </React.Fragment>
    return (
        <div className="navbar bg-base-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-36">
                        {menuitem}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">ORG</Link>
            </div>

            <div className="navbar-end"><div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuitem}
                </ul>
            </div>
                <Link to="/" className="btn btn-sm">Donate</Link>
            </div>
        </div>
    );
};

export default Nav;