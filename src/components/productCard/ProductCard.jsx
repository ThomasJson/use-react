import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./productCard.scss";

const ProductCard = ({ title, price, description, image, isSpecialOffer }) => {

  return (
    <div>
      <Card className="card-style">
        <Card.Img variant="top" src={image} />
        <Container fluid>{isSpecialOffer}</Container>
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
