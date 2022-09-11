import React from "react";
import Cart from "../cart/Cart";
import Description from "../description/Description";
import Header from "../header/Header";
import './banner.scss'

const Banner = ({itemsCount, price}) => {

  return (
    <div className="banner">
      <Header />
      <Description />
      <Cart itemsCount={itemsCount} price={price} />
    </div>
  );
};

export default Banner;
