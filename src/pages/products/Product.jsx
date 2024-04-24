import React, { useState, useEffect } from "react";
import "./Product.css";
import axios from "../../api/index";
import { Link } from "react-router-dom";
import right from "../../components/assets/right.png";
import Bloghero from "../../components/Bloghero/Bloghero";
function Product() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/products")
      .then((res) => setData(res.data.products))
      .catch((res) => console.log(res));
  }, []);
  let products = data?.slice(8, 14).map((el) => (
    <div key={el.id} className="z1">
      <Link to={`/product/${el.id}`}>
        <img className="card-image" src={el.images[0]} alt="" />
      </Link>
      <h1>{el.title}</h1>
      <p>{el.description}</p>
      <div className="z2">
        <h2>Buy now</h2>
        <img src={right} alt="" />
      </div>
    </div>
  ));
  return (
    <div>
      <Bloghero />
      <div className="cards">
        <div className="container">
          <div className="z">
            <h1>All posts</h1>
            <div className="z3">{products}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
