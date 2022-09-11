import React from "react";
import { Container } from "react-bootstrap";
import { plantList } from "../data/plantList";
import ProductCard from "../productCard/ProductCard";
import DisplayOffer from "../specialOffer/DisplayOffer";
import "./bestSales.scss";

const BestSales = ({onAdd}) => {
  const bestSalesPlant = plantList.filter((plant) => plant.isBestSale === true);

  return (
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
                isSpecialOffer={
                  <DisplayOffer isSolded={plant.isSpecialOffer === true} />
                }
                light={plant.light}
                water={plant.water}
                onAdd={onAdd}
              />
            )}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default BestSales;
