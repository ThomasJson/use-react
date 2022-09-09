import React from "react";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import HomeScreen from "../homeScreen/HomeScreen";

const BaseScreen = () => {
  return (
    <div>
      <Banner />
      <HomeScreen />
      <Footer />
    </div>
  );
};

export default BaseScreen;
