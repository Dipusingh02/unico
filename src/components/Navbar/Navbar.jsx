import React, { useState } from "react";
import "./navbar.css";
// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import { CallButton } from '../../components';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="nav">
        <div className="navbar-container">
          <div className="navbar-logo">
            <img src={""} alt="cgc-logo" />
          </div>
          <button className="hamburger" onClick={toggleMenu}>
            <span className={isOpen ? "hamburger-icon open" : "hamburger-icon"}>&#9776;</span>
          </button>
          <div className={`navbar-links ${isOpen ? "show" : ""}`}>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/#Product">Product</Link></li>
              <li><Link to="/policies">Policies</Link></li>
              <CallButton phoneNumber={"+1 (818) 627-1987"} />
              <li><Link to="/contact">Contact Us </Link></li>
              <li><Link to="About">About</Link></li>
              <li><Link to="/Support">Support</Link></li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
