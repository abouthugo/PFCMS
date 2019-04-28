import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import House from "./house.component";
// this component can add, delete, or modify users
import Admin from "./admin.component";

import logo from "./logo.JPG";

class Navbar extends Component {
  render() {

    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" target="_blank">
            <Link to="/">
              <img src={logo} width="50" height="50" alt="/" />
            </Link>
            </a>
            <Link to="/" className="navbar-brand">Pirate Patrol OS</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">All Trays</Link>
              </li>
                <li className="navbar-item">
                  <Link to="/monitor" className="nav-link">Environment Data</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={House} />
          <Route path="/admin" component={Admin} />
        </div>
      </Router>
    );
  }
}

export default Navbar;
