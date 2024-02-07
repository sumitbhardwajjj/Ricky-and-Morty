import React from "react";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <img
          src="rick.png"
          alt="Logo"
        />
      <ul>
        <li>
          <a href="#docs">Docs</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#support">Support</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
