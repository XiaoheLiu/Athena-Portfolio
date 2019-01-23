import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <div className="ui huge text menu" id="NavBar">
        <h1 className="teal header item nameDisplay">Athena Liu</h1>
        <div className="right menu">
          <Link to="/" className="active teal item">
            About
          </Link>
          <div className="item"> | </div>
          <Link to="/projects" className="teal item">
            Projects
          </Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
