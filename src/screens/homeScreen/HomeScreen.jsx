import React from "react";
import CategoryList from '../../components/categoryList/CategoryList';
import BestSales from '../../components/bestSales/BestSales';
import './homeScreen.scss';

const HomeScreen = () => {
  return (
    <main>
      <CategoryList />
      <BestSales />
    </main>
  );
};

export default HomeScreen;