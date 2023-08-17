import React from 'react';
import PropTypes from 'prop-types';
import {useState} from 'react';

import { Link} from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar bg-${props.mode} border-bottom border-body text-${props.mode==='light'?'dark':'light'} data-bs-theme=${props.mode}`}>
    <div className="container-fluid navbar-expand-lg">
    <Link className={`navbar-brand text-${props.mode==='light'?'dark':'light'}`} to='/'>{props.title}</Link>
    <Link className={`navbar-brand text-${props.mode==='light'?'dark':'light'}`} to='/About'>About</Link>
    <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.dark}</label>
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