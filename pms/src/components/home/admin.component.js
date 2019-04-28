import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import House from "./house.component";
// this component can add, delete, or modify users

import logo from "./../../logo.JPG";

class Admin extends Component {
  render() {

    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a target="_blank">
            <Link to="/">
              <img src={logo} className="navbar-brand" width="50" height="50" />
            </Link>
            </a>
            <Link to="/" className="navbar-brand">Pirate Patrol OS</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">

              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={House} />
        </div>
      </Router>
    );
  }
}

export default Admin;
