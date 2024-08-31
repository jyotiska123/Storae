import React from "react";
import "./Footer.css";
import Img from "../../../img/payment.png";
import PhoneIcon from "@mui/icons-material/Phone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import BusinessIcon from "@mui/icons-material/Business";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>New Arrivals</span>
          <span>Women</span>
          <span>Men</span>
          <span>Accessories</span>
          <span>Shoes</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <p>
            Welcome to Storae! We specialize in modern, stylish clothing that
            combines comfort and elegance. Our curated collections ensure you
            always look your best. Discover your new favorite outfit with us
            today!
          </p>
        </div>
        <div className="item">
          <h1>Contact</h1>

          <div className="components">
            <PhoneIcon className="icon" />
            <span>1800-676-997</span>
            <span>1800-575-989</span>
          </div>
          <div className="components">
            <AlternateEmailIcon className="icon" />
            <span>support@storae.com</span>
          </div>
          <div className="components">
            <WhatsAppIcon className="icon" />
            <span>+91-877-9999-657</span>
          </div>
          <div className="components">
            <InstagramIcon className="icon" />
            <span>storae</span>
          </div>
          <div className="components">
            <BusinessIcon className="icon" />
            <span>Af-158, Saltlake, Kolkata-700101</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">STORAE</span>
          <span className="copyright">© 2024. All Rights Reserved</span>
        </div>
        <div className="right">
          <img src={Img} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
