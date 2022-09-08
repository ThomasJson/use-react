import React from "react";
import { plantList } from "../data/plantList";
import "./shoppingList.scss";

const ShoppingList = () => {
  const categoryList = plantList.map((cat) => {
    return <p>{cat.category}</p>;
  });

  return (
    <div>
      <ul className="rOw justify-Evenly category-List">
        {categoryList.map((plant) => (
          <li key={plant.id}>{plant}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
