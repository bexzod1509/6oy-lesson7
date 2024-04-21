import React from "react";
import "./Homehero.css";
import home from "../assets/home.png";
import logoipsum from "../assets/Logoipsum.svg";
import logoipsum2 from "../assets/Logoipsum2.svg";
import logoipsum3 from "../assets/Logoipsum3.svg";
function Homehero() {
  return (
    <div className="homehero">
      <div className="container">
        <div className="b">
          <div>
            <h1>Prosper with our bespoke solutions</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique
            </p>
            <div className="b1">
              <button>See our services</button>
              <span>See All Services </span>
            </div>
            <h2>Worked with 100+ Companies</h2>
            <div className="b2">
              <img src={logoipsum} alt="" />
              <img src={logoipsum2} alt="" />
              <img src={logoipsum3} alt="" />
            </div>
          </div>
          <img className="b3" src={home} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Homehero;
