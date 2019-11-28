import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../logo.svg'

function Navbar() {
  return (
    <nav className="navbar is-light" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://react.org">
          <img src={logo} width="100" height="28" alt="logo" />
        </a>

        <div role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <NavLink to="/" className="navbar-item">
            Users
          </NavLink>

          <NavLink to="/posts" className="navbar-item">
            Posts
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;