import React from "react";
import BestSales from "../bestSales/BestSales";
import CategoryList from "../categoryList/CategoryList";
import "./main.scss";

const Main = () => {
  return (
    <>
      <main>
        <CategoryList />
        <BestSales />
      </main>
    </>
  );
};

export default Main;
