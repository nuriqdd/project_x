import React from "react";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoutes />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
