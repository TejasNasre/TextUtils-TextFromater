import React from 'react';
import PropTypes from 'prop-types';
// import {useState} from 'react';

import { Link} from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} border-bottom border-body`}>
  <div className="container-fluid">
    <a className="navbar-brand " href="/"><h1>{props.title}</h1></a>
    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">About</Link>
        </li>
      </ul>
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.dark}</label>
</div>
    </div>
  </div>
</nav>
    </>
  )
}

// set type of props
Navbar.propTypes = {
  title : PropTypes.string.isRequired
}

// set default props  if props is not passed
Navbar.defaultProps = {
  title : "Here Your Prop Name"
}