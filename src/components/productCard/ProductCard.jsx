import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CareScale from "../careScale/CareScale";
import "./productCard.scss";

const ProductCard = ({
  title,
  price,
  description,
  image,
  isSpecialOffer,
  light,
  water,
  onAdd
}) => {

  return (
    <div>
      <Card className="card-style">
        <Card.Img variant="top" src={image} />
        <Container fluid>{isSpecialOffer}</Container>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <CareScale careType="light" scaleValue={light} />
          <CareScale careType="water" scaleValue={water} />
          <Button onClick={onAdd}>{price}</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
