import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import "./cart.scss";

const Cart = ({price}) => {

  return (
    <div className="cart">
      <span>{price}</span>
      <FiShoppingCart />
    </div>
  );
};

export default Cart;
