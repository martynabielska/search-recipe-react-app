import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar__wrapper">
      <ul className="navbar-menu">
        <div className="navbar-item-wrapper">
          <li className="navbar-item">
            <Link to={routes.home}>Home</Link>
          </li>
          <li>
            <Link to={routes.about}>About</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
