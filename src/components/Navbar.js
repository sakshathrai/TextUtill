import React from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
            <Link className="navbar-brand" to="/">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link" >Home</Link>
                    </li>
                    <li className="nav-item ">
                        <Link to="/about" className="nav-link" >{props.about}</Link>
                    </li>
                </ul>
             
                < div className={`custom-control custom-switch text-${props.mode==='light'? 'dark':'light'}`}>
                        <input type="checkbox" onClick={props.toggleMode} className="custom-control-input " id="customSwitch1" />
                        <label className="custom-control-label" htmlFor="customSwitch1">Enable Dark Mode</label>
                    </div>

                </div>
                </div>
            </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired, // You should include mode in propTypes if you use it.
};

Navbar.defaultProps = {
    title: "TEXTUTILS",
    about: "About",
};
