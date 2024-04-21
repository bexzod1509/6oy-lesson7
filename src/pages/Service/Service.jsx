import React from "react";
import Hero from "../../components/hero/Hero";
import heroimg2 from "../../components/assets/heroimg2.png";
function Service() {
  return (
    <div>
      <Hero
        title={"We serve clients with ground breaking solutions"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis."
        }
        btn={"Work With Us"}
        img={heroimg2}
      />
    </div>
  );
}

export default Service;
