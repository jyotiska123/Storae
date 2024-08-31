import React, { useState } from "react";
import Women1 from "../../../img/411bf92ab7db3f5e560ff6899affecf7.jpg";
import kids from "../../../img/thumb-1920-236764.jpg";
import Women2 from "../../../img/desktop-wallpaper-men-fashion-resolution-men-s-fashion.jpg";
import Group from "../../../img/group-beautiful-chlidren-posing_155003-1987.avif";
import Man from "../../../img/images.jpg";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import "./Slider.css";
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",

    // Women2,
  ];
  const prevSlide = () => {
    setCurrentSlide(currentSlide == 0 ? images.length - 1 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide == images.length - 1 ? 0 : (prev) => prev + 1);
  };
  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {images.map((img) => (
          <img style={{ width: "100%", objectFit: "cover" }} src={img} />
        ))}
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
