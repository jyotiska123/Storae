import React from "react";
import Slider from "../../componenets/Slider/Slider";
import Featured from "../../componenets/Featured Components/Featured";
import Category from "../../componenets/Categories/Category";
import "./Home.css";
import Contact from "../../componenets/Contact/Contact";
const Home = () => {
  return (
    <div>
      <Slider />
      <Featured type="Featured" />
      <Category />
      <Featured type="Trending" />
      <Contact />
    </div>
  );
};

export default Home;
