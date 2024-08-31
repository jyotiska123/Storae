import React from "react";
import Navbar from "./componenets/Navbar/Navbar";
import Footer from "./componenets/Footer/Footer";
import { Outlet } from "react-router-dom";
import "./App.css";
const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
