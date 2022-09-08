import React from "react";
import { plantList } from "../data/plantList";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./shoppingList.scss";

const ShoppingList = () => {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  return (
    <div>
      <ul className="rOw justify-Evenly category-List">
        {categories.map((cat) => (
          <li key={cat}>
              <DropdownButton
                variant="outline-secondary"
                title={cat}
                id="input-group-dropdown-1"
              >
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
              </DropdownButton>
          </li>
        ))}
      </ul>

      {/* <ul>
        {plantList.map((plant) => (
          <li key={plant.id}>{plant.name}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default ShoppingList;
