import React, { useState } from "react";
import "./Product.css";
import img1 from "../../../img/zodiac-sign-fashion-guide.png";
import img2 from "../../../img/product-3.webp";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CompareIcon from "@mui/icons-material/Compare";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import "./Product.css";
const Product = () => {
  const [counter, setCounter] = useState(0);
  const [image, setImage] = useState(img1);
  function handleSub() {
    {
      counter > 0 ? setCounter((prev) => prev - 1) : setCounter(0);
    }
  }
  function handleAdd() {
    setCounter((prev) => prev + 1);
  }
  return (
    <div className="product">
      <div className="left">
        <div className="imageCorner">
          <img className="image" src={img1} onClick={(e) => setImage(img1)} />
          <img className="image" src={img2} onClick={(e) => setImage(img2)} />
        </div>
        <div className="mainImg">
          <img src={image} className="image" />
        </div>
      </div>
      <div className="right">
        <div className="info">
          <h2>Long Sleeve Graphic T-shirt</h2>
          <p className="price">$19.90</p>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non
            viverra lectus, eget sodales enim. Vivamus non sollicitudin diam, et
            luctus nibh. Cras consequat ipsum hendrerit magna viverra pharetra
            aliquet at orci. Class aptent taciti sociosqu ad litora torquent
            per.
          </p>
        </div>
        <div className="functionality">
          <div
            className="counter"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <button onClick={handleSub}>-</button>
            <div className="core">{counter}</div>
            <button onClick={handleAdd}>+</button>
          </div>

          <button className="button">
            <AddShoppingCartIcon className="cart2" />
            Add to Cart
          </button>

          <div className="stuff">
            <span style={{ display: "flex", flexDirection: "row" }}>
              <FavoriteIcon className="icon" />
              <p> Add to Wishlist</p>
            </span>
            <span style={{ display: "flex", flexDirection: "row" }}>
              <CompareIcon className="icon" />
              <p>Add to Compare</p>
            </span>
          </div>
          <div className="vendor">
            <p>Vendor:Polo</p>
            <p>Product Type: Tshirt</p>
            <p>Tag:Tshirt, Women, Top</p>
            <HorizontalRuleIcon />
          </div>
          <div>
            <p>DESCRIPTION</p>
            <HorizontalRuleIcon />
            <p>ADDITIONAL INFORMATION</p>
            <HorizontalRuleIcon />
            <p>FAQ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
