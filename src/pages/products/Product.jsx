import React, { useState, useEffect } from "react";
import "./Product.css";
import axios from "../../api/index";
import { Link } from "react-router-dom";
import right from "../../components/assets/right.png";
import Bloghero from "../../components/Bloghero/Bloghero";
function Product() {
  const [category, setCategory] = useState("All");
  const [options, setOptions] = useState(null);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);
  useEffect(() => {
    axios
      .get(`/products/categories`)
      .then((res) => setOptions(res.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get(
        `/products${category === "All" ? "" : `/category/${category}`}?limit=${
          count * 6
        }`
      )
      .then((res) => setData(res.data.products))
      .catch((res) => console.log(res));
  }, [count, category]);
  let option = options?.map((e, inx) => (
    <option key={inx} value={e}>
      {e}
    </option>
  ));
  let products = data?.map((el) => (
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
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            name=""
            id="option"
          >
            <option value="All">All</option>
            {option}
          </select>
          <div className="z">
            <h1>All posts</h1>
            <div className="z3">{products}</div>
          </div>
          <button onClick={() => setCount((p) => p + 1)}>See more</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
