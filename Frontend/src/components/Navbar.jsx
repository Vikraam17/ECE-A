import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            {/* <Link to="/">Home</Link> */}
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/useState">useState</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
