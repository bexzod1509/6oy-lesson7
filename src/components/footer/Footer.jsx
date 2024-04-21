import React from "react";
import "./Footer.css";
import { FiFacebook } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import { PiInstagramLogo } from "react-icons/pi";
import { FiTwitter } from "react-icons/fi";
import logo from "../assets/Logowh.svg";
import { FaOtter } from "react-icons/fa";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="f">
          <div className="f1">
            <img src={logo} alt="" />
            <h1>Bespoke software solutions</h1>
            <div className="f2">
              <FiFacebook />
              <FiYoutube />
              <PiInstagramLogo />
              <FiTwitter />
            </div>
          </div>
          <div className="f2">
            <h1>Company</h1>
            <p>About Us</p>
            <p>Careers</p>
            <p>Services</p>
            <p>Blog</p>
          </div>
          <div className="f2">
            <h1>Connect</h1>
            <p>hi@finsweet.com</p>
            <p>+(123) 456-7890</p>
          </div>
          <div className="f3">
            <h1>Join Newsletter</h1>
            <input type="email" name="" id="" placeholder="Type email here" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="f4">
          <p>© All rights reserved – Finsweet</p>
          <p>Privacy Policy Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
