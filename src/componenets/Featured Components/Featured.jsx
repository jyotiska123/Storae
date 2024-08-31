import React from "react";
import "./Featured.css";
import Card from "../../componenets/Card/Card";
import img1 from "../../../img/card1.jpg";
import img2 from "../../../img/card2.jpg";
import img3 from "../../../img/card3.jpg";
import img4 from "../../../img/product-3.webp";
const Featured = ({ type }) => {
  const data = [
    {
      id: 1,
      img: img1,
      title: "Urban Chic Off-Shoulder",
      old_price: 120,
      new_price: 95,
      isNew: true,
    },
    {
      id: 2,
      img: img2,
      title: "Modern Classic Leather Jacket",
      old_price: 80,
      new_price: 65,
      isNew: false,
    },
    {
      id: 3,
      img: img3,
      title: "Casual Pullover",
      old_price: 150,
      new_price: 120,
      isNew: true,
    },
    {
      id: 4,
      img: img4,
      title: "Elegant Dresses for Kids ",
      old_price: 40,
      new_price: 30,
      isNew: false,
    },
  ];

  return (
    <div className="featuredProducts">
      <div className="top">
        <h2>{type} Products</h2>
        <p>
          Elevate your wardrobe with Storae Urban Chic Blazer. Combining sleek
          lines and a tailored fit, it’s perfect for work or social outings.
          Experience contemporary fashion with this versatile, stylish piece
          made from premium materials.
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
