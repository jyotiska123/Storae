import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import PinterestIcon from "@mui/icons-material/Pinterest";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import "./Contact.css";
const Contact = () => {
  return (
    <div
      className="contact"
      style={{ display: "flex", justifyContent: "space-evenly" }}
    >
      <p
        style={{
          textTransform: "uppercase",
          color: "white",
          fontFamily: "roboto",
        }}
      >
        Be in touch with us
      </p>
      <div style={{ display: "flex" }}>
        <input
          style={{
            textTransform: "uppercase",
            color: "gray",
            padding: "10px",
            borderRadius: "5px 0 0 5px",
            // marginTop: "8px",
            border: "none",
          }}
          type="email"
          placeholder="Enter your email"
        />
        <button
          style={{
            textTransform: "uppercase",
            color: "white",
            backgroundColor: "black",
            padding: "10px",
            border: "none",
            borderRadius: "0 5px 5px 0",
            cursor: "pointer",
          }}
          type="submit"
        >
          Join us
        </button>
      </div>
      <div className="icons" style={{ color: "white" }}>
        <FacebookIcon />
        <XIcon />
        <InstagramIcon />
        <WhatsAppIcon />
        <TelegramIcon />
      </div>
    </div>
  );
};

export default Contact;
