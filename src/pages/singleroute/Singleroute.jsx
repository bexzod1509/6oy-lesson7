import React, { useEffect, useState } from "react";
import "./Singleroute.css";
import avatar from "../../components/assets/avatar.png";
import { useParams } from "react-router-dom";
import axios from "../../api/index";
function Singleroute() {
  const { id } = useParams();
  const [products, setProducts] = useState(null);
  useEffect(() => {
    axios
      .get(`/products/${id}`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="container">
      <div className="products">
        <div key={products?.id} className="p">
          <img className="p-image" src={products?.images[0]} alt="" />
          <div className="p1">
            <div className="d1" style={{ justifyContent: "center" }}>
              <div className="d4">
                <img src={avatar} alt="" />
                <p>Andrew Jonson</p>
              </div>
              <p>Posted on 27th January 2021</p>
            </div>
            <h1>{products?.title}</h1>
            <p>
              Writing UX copies can be a little frustrating and confusing, and
              sometimes we are unsure about how to get the right word. To crack
              the code for the UX copies, we at Zeta Design wanted to build a
              Figma plugin for the larger design community. The plugin is called
              the Ghost UXWriter and has a set of UX copies cataloged and
              categorized with a voice and tone variation ranging from plain,
              casual to playful. The intention to build this Figma plugin
              originated from our Medium blog post, ‘Designing voice and tone
              for error messages.
              <br />
              <br />
              Writing UX copies can be a little frustrating and confusing, and
              sometimes we are unsure about how to get the right word. To crack
              the code for the UX copies, we at Zeta Design wanted to build a
              Figma plugin for the larger design community. The plugin is called
              the Ghost UXWriter and has a set of UX copies cataloged.
              <br />
              <br />
              Writing UX copies can be a little frustrating and confusing, and
              sometimes we are unsure about how to get the right word. To crack
              the code for the UX copies, we at Zeta Design wanted to build a
              Figma plugin for the larger design community. The plugin is called
              the Ghost UXWriter and has a set of UX copies cataloged and
              categorized with a voice and tone variation ranging from plain,
              casual to playful. The intention to build this Figma plugin
              originated from our Medium blog post, ‘Designing voice.
            </p>
            <h1>{products?.description}</h1>
            <p>
              Writing UX copies can be a little frustrating and confusing, and
              sometimes we are unsure about how to get the right word. To crack
              the code for the UX copies, we at Zeta Design wanted to build a
              Figma plugin for the larger design community. The plugin is called
              the Ghost UXWriter and has a set of UX copies cataloged.
              <br />
              <br />
              Writing UX copies can be a little frustrating and confusing, and
              sometimes we are unsure about how to get the right word. To crack
              the code for the UX copies, we at Zeta Design wanted to build a
              Figma plugin for the larger design community. The plugin is called
              the Ghost UXWriter and has a set of UX copies cataloged and
              categorized with a voice and tone variation ranging from plain,
              casual to playful. The intention to build this Figma plugin
              originated from our Medium blog post, ‘Designing voice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Singleroute;
