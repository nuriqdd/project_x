import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import ProductList from "./Components/ProductList/ProductList";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productlist" element={<ProductList />} />
    </Routes>
  );
};

export default MainRoutes;
