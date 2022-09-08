import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import "./cart.scss";

const Cart = ({articleN}) => {

  return (
    <div className="cart">
      <FiShoppingCart size={30}/>
      <div className="articles-number">{articleN}</div>
    </div>
  );
};

export default Cart;
