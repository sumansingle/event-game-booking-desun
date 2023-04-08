import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/cart">cart</Link>
      </div>
    </div>
  );
};
export default Navbar;