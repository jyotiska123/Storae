import React from "react";
import img1 from "../../../img/card1.jpg";
import img2 from "../../../img/card2.jpg";
import img3 from "../../../img/card3.jpg";
import img4 from "../../../img/product-3.webp";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Cart.css";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: img1,
      title: "Urban Chic Off-Shoulder",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      old_price: 1200,
      new_price: 950,
      isNew: true,
    },
    {
      id: 2,
      img: img2,
      title: "Modern Classic Leather Jacket",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      old_price: 1800,
      new_price: 965,
      isNew: false,
    },
    {
      id: 3,
      img: img3,
      title: "Casual Pullover",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      old_price: 1150,
      new_price: 920,
      isNew: true,
    },
    {
      id: 4,
      img: img4,
      title: "Elegant Dresses for Kids ",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      old_price: 2040,
      new_price: 1030,
      isNew: false,
    },
  ];
  return (
    <div className="cart">
      <h1 className="head">Products in your Cart</h1>
      {data.map((prod) => (
        <div className="item" key={prod.id}>
          <img src={prod.img} />
          <div className="details">
            <h1>{prod.title}</h1>
            <p>{prod.desc.substring(0, 100)}</p>
            <p className="price">1*Rs. {prod.new_price}</p>
          </div>
          <DeleteIcon
            style={{ color: "#b71212", fontSize: "30px", cursor: "pointer" }}
          />
        </div>
      ))}
      <div className="price">
        <span>SUBTOTAL</span>
        <span>Rs. 3000</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span style={{ color: "red" }}>Reset Cart</span>
      {/* <div>
        <img />
        <div>
          <h4>Long Sleeve Graphic Tshirt</h4>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div> */}
    </div>
  );
};

export default Cart;
