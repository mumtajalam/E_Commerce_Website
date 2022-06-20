import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Arrow from "../components/Slider";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Arrow />
      <Categories />
      <Products />
    </div>
  );
};

export default Home;
