import React from "react";
import "./Navbar.css";
import logo from "../assets/Logo.png";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <header>
      <div className="container">
        <nav>
          <NavLink to={"/"}>
            <img src={logo} alt="" />
          </NavLink>
          <div className="a">
            <NavLink to={"/about"}>About Us</NavLink>
            <NavLink to={"/careers"}>Careers</NavLink>
            <NavLink to={"/service"}>Services</NavLink>
            <NavLink to={"/blog"}>Blog</NavLink>
            <NavLink to={"/"}>Contact us</NavLink>
            <NavLink to={"/cards"}>Products</NavLink>
            <button>Clone project</button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
