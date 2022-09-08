import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './product.scss';

const Product = ({ title, price, description }) => {
  return (
    <div>
      <Card className="card-style">
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">{price}</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
