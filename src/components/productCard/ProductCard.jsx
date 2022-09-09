import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { plantList } from "../data/plantList";
import "./productCard.scss";

const ProductCard = ({ title, price, description, image, isSpecialOffer }) => {


  return (
    <div>
      <Card className="card-style">
        <Card.Img variant="top" src={image} />
        
        {/* {specialOffers.filter((el) => el.isSpecialOffer)}
        <p className="soldes"></p> */}

        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button>{price}</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
