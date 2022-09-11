import React from "react";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import HomeScreen from "../homeScreen/HomeScreen";

const BaseScreen = ({onAdd, cartCounter}) => {

  return (
    <div>
      <Banner onAdd={onAdd} cartCounter={cartCounter} />
      <HomeScreen onAdd={onAdd}/>
      <Footer />
    </div>
  );
};

export default BaseScreen;
