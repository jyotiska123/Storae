import React from "react";
import "./Card.css";

import { Link } from "react-router-dom";
const Card = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`} className="link">
      <div className="card">
        <div className="image">
          {item.isNew && <span>New Season</span>}
          <img src={item.img} alt="" className="mainImg" />
        </div>

        <h2>{item.title}</h2>

        <div className="prices">
          <p style={{ textDecoration: "line-through" }}>$ {item.old_price}</p>{" "}
          <p>$ {item.new_price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
