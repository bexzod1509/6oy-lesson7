import React from "react";
import "./Bloghero.css";
import avatar from "../assets/avatar.png";
import blogimg from "../assets/blogimg.png";
import right from "../assets/right.png";
function Bloghero() {
  return (
    <div className="d3">
      <div className="container">
        <div className="d">
          <div>
            <div className="d1">
              <div className="d4">
                <img src={avatar} alt="" />
                <p>Andrew Jonson</p>
              </div>
              <p>Posted on 27th January 2021</p>
            </div>
            <h1>Our internal process and longerm vision</h1>
            <h2>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              Maker is a decentralized. We aim to attain the
            </h2>
            <div className="d2">
              <h3>Read More</h3>
              <img src={right} alt="" />
            </div>
          </div>
          <img src={blogimg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Bloghero;
