import React, { useState } from "react";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import "./Navbar.css";
import Cart from "../../componenets/Cart/Cart.jsx";
import "../../App.css";
import { Link } from "react-router-dom";
import IND from "../../../img/download.png";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div>
            <img style={{ width: "6vh" }} src={IND} />
            <ArrowDownwardOutlinedIcon />
          </div>
          <div className="item">
            <span>INR</span>
            <ArrowDownwardOutlinedIcon />
          </div>
          <div className="item">
            <Link className="link" to="/products/:id">
              Women{" "}
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/:id">
              Men{" "}
            </Link>
          </div>
          <div className="item">
            <Link to="/products/:id" className="link">
              Children{" "}
            </Link>
          </div>
          <div className="item">
            <Link to="/products/:id" className="link">
              Accessories{" "}
            </Link>
          </div>
        </div>
        <div className="center">
          <Link to="/" className="link">
            Storae
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link to="/" className="link">
              HomePage
            </Link>
          </div>
          <div className="item">
            <Link to="/" className="link">
              About
            </Link>
          </div>
          <div className="item">
            <Link to="/" className="link">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link to="/" className="link">
              Stores
            </Link>
          </div>
          <div className="icons">
            <SearchOutlinedIcon />
            <Link to="/auth/signin">
              <PersonOutlineOutlinedIcon />
            </Link>

            <FavoriteOutlinedIcon />
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
