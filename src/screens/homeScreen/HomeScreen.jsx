import React from "react";
import CategoryList from '../../components/categoryList/CategoryList';
import BestSales from '../../components/bestSales/BestSales';
import './homeScreen.scss';

const HomeScreen = ({onAdd}) => {
  return (
    <main>
      <CategoryList />
      <BestSales onAdd={onAdd}/>
    </main>
  );
};

export default HomeScreen;