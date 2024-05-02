import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/Logo.png";
import { NavLink, Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import axios from "../../api/index";
function Navbar() {
  const [reveal, setReveal] = useState([]);
  const [info, setInfo] = useState("");
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/search?q=${info}`)
      .then((res) => setReveal(res.data.products))
      .catch((err) => console.log(err));
  }, [info]);
  return (
    <header>
      <div className="container">
        <nav>
          <NavLink to={"/"}>
            <img src={logo} alt="" />
          </NavLink>
          <div className="bar">
            <div className="bar2">
              <input
                type="search"
                value={info}
                onChange={(e) => setInfo(e.target.value)}
                name=""
                id=""
                placeholder="Search..."
              />
              <IoSearch />
            </div>
            <div className="bar1">
              {reveal?.length != 30
                ? reveal?.slice(0, 8).map((e) => (
                    <Link onClick={() => setInfo("")} to={`/product/${e.id}`}>
                      <div key={e.id} className="bar4">
                        <img src={e.images[0]} alt="" />
                        <p>{e.title}</p>
                      </div>
                    </Link>
                  ))
                : ""}
            </div>
          </div>

          <div className="a">
            <NavLink to={"/about"}>About Us</NavLink>
            <NavLink to={"/careers"}>Careers</NavLink>
            <NavLink to={"/service"}>Services</NavLink>
            <NavLink to={"/blog"}>Blog</NavLink>
            <NavLink to={"/"}>Contact us</NavLink>
            <NavLink to={"/cards"}>Products</NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
