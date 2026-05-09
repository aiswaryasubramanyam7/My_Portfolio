import React from 'react';
import './Navbar.css'; // Optional: if you prefer separate CSS files

const Navbar = () => {
  return (
    <nav className="navbar container">
      <div className="logo">
        <h2>Flowa</h2>
      </div>
      <ul className="nav-links">
        <li><a href="#home">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#services">SERVICES</a></li>
        <li><a href="#resume">RESUME</a></li>
        <li><a href="#portfolio">PORTFOLIO</a></li>
        <li><a href="#blog">BLOG</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;