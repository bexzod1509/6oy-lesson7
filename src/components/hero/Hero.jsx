import React, { memo } from "react";
import "./Hero.css";
function Hero(props) {
  return (
    <div className="container">
      <div className="h">
        <div>
          <h1>{props.title}</h1>
          <p>{props.desc}</p>
          <button>{props.btn}</button>
        </div>
        <img src={props.img} alt="" />
      </div>
    </div>
  );
}

export default memo(Hero);
