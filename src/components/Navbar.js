import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
     
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
          id="sideNav"
        >
          <a className="navbar-brand js-scroll-trigger" href="/">
            <span className="d-block d-lg-none">Devonte Hillman</span>
            <span className="d-none d-lg-block">
            
              <img
                className="img-fluid img-profile rounded-circle mx-auto mb-2"
                src="images/profile.jpg"
                alt="..."
                style={{boxShadow: "0px 1px 20px 7px rgba(0,0,0,0.3)"}}
              />
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#/">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
     
    );
  }
}
