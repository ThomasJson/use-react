import React from "react";
import "./displayOffer.scss";
import SpecialOffer from "./SpecialOffer";

const DisplayOffer = (props) => {
  const isSolded = props.isSolded;

  if (isSolded === true) {
    return <SpecialOffer />;
  }
  return;
};

export default DisplayOffer;
