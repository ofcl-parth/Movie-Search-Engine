import React from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="nav-bar">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/favorites" className="nav-link">
          Favorites
        </Link>
      </div>
    </>
  );
}

export default NavBar;
