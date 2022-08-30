import React from "react";
import NavBar from "./Components/Navbar/Navbar";
import MainRoutes from "./MainRoutes";
import Footer from "./Components/Footer/Footer";
import AuthContextProvider from "./context/AuthContext";
import CartContextProvider from "./context/CartContextProvider";
import ProductContextFire from "./context/ProductsContextProvider";
import ProductsContextProvider from "./context/ProductsContextProvider";

const App = () => {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <ProductsContextProvider>
          <NavBar />
          <MainRoutes />
          <Footer />
        </ProductsContextProvider>
      </CartContextProvider>
    </AuthContextProvider>
  );
};

export default App;
