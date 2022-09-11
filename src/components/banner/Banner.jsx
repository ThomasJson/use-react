import React from "react";
import Cart from "../cart/Cart";
import Description from "../description/Description";
import Header from "../header/Header";
import './banner.scss'

const Banner = ({onAdd, cartCounter}) => {

  return (
    <div className="banner">
      <Header />
      <Description />
      <Cart onAdd={onAdd} cartCounter={cartCounter} />
    </div>
  );
};

export default Banner;
