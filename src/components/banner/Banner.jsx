import React from "react";
import Cart from "../cart/Cart";
import Description from "../description/Description";
import Header from "../header/Header";
import './banner.scss'

const Banner = () => {
  return (
    <div className="banner">
      <Header />
      <Description />
      <Cart articleN={2} />
    </div>
  );
};

export default Banner;
