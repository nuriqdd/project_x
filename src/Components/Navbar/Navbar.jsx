import React, { useContext, useState } from "react";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./Navbar.css";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../context/AuthContext";
import { ADMINS } from "../../helpers/consts";

const Navbar = () => {
  const { user, handleLogout } = useContext(authContext);

  const navigate = useNavigate();

  const isAdmin = () => {
    let res;
    user ? (res = ADMINS.includes(user.email)) : (res = false);
    return res;
  };
  return (
    <div className="MainNavbar">
      <div className="navbar">
        <div className="navbar-logo">
          <div className="name-site">WINE SHOP</div>
        </div>
        <div className="navbar-nav">
          <div className="navbar-nav-router" onClick={() => navigate("/")}>
            Home
            <ArrowBackIosIcon className="arrow" />
          </div>
          <div
            className="navbar-nav-router"
            onClick={() => navigate("/productlist")}
          >
            Products
            <ArrowBackIosIcon className="arrow" />
          </div>
          {isAdmin() ? (
            <div
              className="navbar-nav-router"
              onClick={() => navigate("/adminG")}
            >
              Admin
              <ArrowBackIosIcon className="arrow" />
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="navbar-icons">
          <AddShoppingCart
            onClick={() => navigate("/cart")}
            className="navbar-icons-icon"
          />
          <span>{user.email}</span>
          {user ? (
            <button className="but-but" onClick={handleLogout}>
              log out
            </button>
          ) : (
            <></>
          )}
          <FavoriteBorder
            onClick={() => navigate("/favorites")}
            className="navbar-icons-icon"
          />
          <AccountCircleIcon
            onClick={() => navigate("/auth")}
            className="navbar-icons-icon "
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
