import React from "react";
import { Container } from "react-bootstrap";
import Product from "../product/Product";
import './main.scss';

const Main = () => {
  return (
    <Container fluid id="product-Bloc">
      <ul className="rOw justify-Evenly">
        <li>
          <Product
            title="Montsera"
            price="8"
            description="C'est dla bonne frère"
          />
        </li>
        <li>
          <Product title="Lierre" price="10" description="Mauvaise herbe" />
        </li>
        <li>
          <Product title="Fleurs" price="15" description="PD" />
        </li>
      </ul>
    </Container>
  );
};

export default Main;
