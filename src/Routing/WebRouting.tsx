import { View } from "react-native";
import { Svg, Path } from "react-native-svg";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hopepage from "../Screens/Homepage/HomePage";
import ProductPage from "../Screens/ProductPage/ProductPage";
import PricingScreen from "../Screens/PricingPage/PricingScreen";

const WebRouting = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hopepage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingScreen />} />
      </Routes>
    </Router>
  );
};

export default WebRouting;
