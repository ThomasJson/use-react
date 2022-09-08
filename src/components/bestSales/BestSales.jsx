import React from "react";
import { Container } from "react-bootstrap";
import ProductCard from "../productCard/ProductCard";
import "./bestSales.scss";

const BestSales = () => {
  return (
    <div>
      <Container fluid id="product-Bloc">
        <h3>Best Sales</h3>
        <ul className="rOw justify-Evenly phare-product">
          <li>
            <ProductCard
              title="Purple Kush"
              price={8 + " €"}
              description="C'est dla bonne frère"
              image="./assets/img/purple.jpeg"
            />
          </li>
          <li>
            <ProductCard
              title="Amnesia"
              price={10 + " €"}
              description="La base"
              image="./assets/img/amne.jpeg"
            />
          </li>
          <li>
            <ProductCard
              title="Rose"
              price={15 + " €"}
              description="Mauvaise herbe"
              image="./assets/img/rose.jpg"
            />
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default BestSales;
