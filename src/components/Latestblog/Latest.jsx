import React from "react";
import "./Latest.css";
import cardimg1 from "../assets/cardimg1.png";
import cardimg2 from "../assets/cardimg2.png";
import cardimg3 from "../assets/cardimg3.png";
import right from "../assets/right.png";
import { useLocation } from "react-router-dom";

function Latest() {
  let { pathname } = useLocation();
  if (
    pathname.includes("/blog") ||
    pathname.includes("/cards") ||
    pathname.includes("/product")
  ) {
    return <></>;
  }
  return (
    <div className="latest">
      <div className="container">
        <div className="l">
          <h1>Latest Blog & News</h1>
          <div className="l3">
            <div className="l1">
              <img src={cardimg1} alt="" />
              <h1>Why you have to digitalize in 2021</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sit amet eros blandit, hendrerit elit et.
              </p>
              <div className="l2">
                <h2>Learn More</h2>
                <img src={right} alt="" />
              </div>
            </div>
            <div className="l1">
              <img src={cardimg2} alt="" />
              <h1>Our internal process and longerm vision</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sit amet eros blandit, hendrerit elit et.
              </p>
              <div className="l2">
                <h2>Learn More</h2>
                <img src={right} alt="" />
              </div>
            </div>
            <div className="l1">
              <img src={cardimg3} alt="" />
              <h1>Helping the next generation of leaders</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur sit amet eros blandit, hendrerit elit et.
              </p>
              <div className="l2">
                <h2>Learn More</h2>
                <img src={right} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Latest;
