import React from "react";
import { Container } from "react-bootstrap";
import { plantList } from "../data/plantList";
import ProductCard from "../productCard/ProductCard";
import "./bestSales.scss";

const BestSales = () => {
  const bestSalesPlant = plantList.filter((plant) => plant.isBestSale === true);

  return (
    <div>
      <Container fluid id="product-Bloc">
        <h3>Best Sales</h3>

        <ul className="rOw justify-Evenly phare-product">
          {bestSalesPlant.map((plant) => (
            <li key={plant.id}>
              {plant.isBestSale && (
                <ProductCard
                  title={plant.name}
                  price={plant.price + "  €"}
                  description={plant.description}
                  image={plant.image}
                  // isSpecialOffer={plant.isSpecialOffer}
                />
              )}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default BestSales;
