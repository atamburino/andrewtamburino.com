import React, { Component } from "react";
import './Navbar.css';

class Navbar extends Component {
  render() {
    return(
      <nav className="main-nav">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">Resume</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
          </nav>
    )
  }
}

export default Navbar;