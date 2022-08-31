import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./Components/Admin/Admin";
import Home from "./Components/Home/Home";
import ProductList from "./Components/ProductList/ProductList";
import AddProduct from "./Components/Products/AddProduct";
import Authorization from "./Auth/Autorization";
import Cart from "./Components/Cart/Cart";
import Contacts from "./Components/Contacts/Contacts";
import AboutUs from "./Components/AboutUs/AboutUs";
import { Card } from "@mui/material";
import Payment from "./Components/Products/PaymantForm.jsx";
import Carddetails from "./Components/Products/Carddetails";
import Favorites from "./Components/Products/Favorites";
import AdminGlobal from "./Components/Admin/AdminGlobal";
import EditProduct from "./Components/Products/EditProduct.jsx";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Authorization />} />
      <Route path="/productlist" element={<ProductList />} />
      <Route path="/admin" element={<AddProduct />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="/pay" element={<Payment />} />
      <Route path="/cardDetails/:id" element={<Carddetails />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/adminG" element={<AdminGlobal />} />
      <Route path="/edit/:id" element={<EditProduct />} />
    </Routes>
  );
};

export default MainRoutes;
