import React from "react";
import { plantList } from "../data/plantList";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./categoryList.scss";

const CategoryList = () => {
  // acc = "accumulateur" ;
  
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  return (
    <div className="cat-container">
      <ul className="rOw justify-Evenly category-List">
        {categories.map((cat) => (
          <li key={cat}>
            <DropdownButton
              variant="outline-secondary"
              title={cat}
              id="input-group-dropdown-1"
            >
              <Dropdown.Item href="#">Action</Dropdown.Item>
              <Dropdown.Item href="#">Another</Dropdown.Item>
              <Dropdown.Item href="#">Something</Dropdown.Item>
            </DropdownButton>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
