import React from "react";
import { Container } from "react-bootstrap";
import Product from "../product/Product";
import ShoppingList from "../shoppingList/ShoppingList";
import "./main.scss";

const Main = () => {
  return (
    <>
    <ShoppingList />
    <Container fluid id="product-Bloc">
      <ul className="rOw justify-Evenly">
        <li>
          <Product
            title="Purple Kush"
            price={8 + " €"}
            description="C'est dla bonne frère"
            image="./assets/img/purple.jpeg"
          />
        </li>
        <li>
          <Product
            title="Amnesia"
            price={10 + " €"}
            description="La base"
            image="./assets/img/amne.jpeg"
          />
        </li>
        <li>
          <Product
            title="Rose"
            price={15 + " €"}
            description="Mauvaise herbe"
            image="./assets/img/rose.jpg"
          />
        </li>
      </ul>
    </Container>
    </>
  );
};

export default Main;
