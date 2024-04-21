import React, { memo } from "react";
import Hero from "../../components/hero/Hero";
import heroimg1 from "../../components/assets/heroimg1.png";
import Aboutus from "../../components/aboutus/Aboutus";
function About() {
  return (
    <div>
      <Hero
        title={
          "We value human, organizational, and operational intelligence, not just artificial"
        }
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis."
        }
        btn={"Work With Us"}
        img={heroimg1}
      />
      <Aboutus />
    </div>
  );
}

export default memo(About);
