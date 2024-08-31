import React, { useState } from "react";
import "./Products.css";
import { useParams } from "react-router-dom";
import List from "../../componenets/List/List.jsx";
import img from "../../../img/categories/WED21670-1.jpg";
import "./Products.css";
const Products = () => {
  const catId = parseInt(useParams().id);
  console.log(catId);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  const products = ["hat", "tshirt", "shirt", "skirt", "top", "tunics"];
  // const price
  return (
    <div className="products" style={{ flexDirection: "row" }}>
      <div className="left" style={{ flexDirection: "column" }}>
        <div className="filter">
          <h2>Product Categories</h2>

          <div className="inputItem"></div>
          {products.map((product) => (
            <p>
              <input type="checkbox" /> <span>{product}</span>
            </p>
          ))}
        </div>
        <div className="filter">
          <h2>Filter by Price</h2>
          <div className="inputItem">
            <span className="span">0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span className="span">{maxPrice}</span>
          </div>
        </div>
        <div className="filter">
          <h2>Sort By</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right" style={{ flexDirection: "column" }}>
        <img className="catImg" src={img} />

        <List sort={sort} catId={catId} maxPrice={maxPrice} className="lol" />
      </div>
    </div>
  );
};

export default Products;
