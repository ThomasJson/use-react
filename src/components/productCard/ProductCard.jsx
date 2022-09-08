import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './productCard.scss';

const ProductCard = ({ title, price, description, image }) => {
  return (
    <div>
      <Card className="card-style">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">{price}</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
