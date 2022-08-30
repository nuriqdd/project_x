import React, { useContext } from "react";
import { cartContext } from "../../context/CartContextProvider";
import { AddShoppingCart } from "@mui/icons-material";
import { checkProductInCart } from "../../helpers/cartFunctions";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const productsArr = JSON.parse(localStorage.getItem("likes")).products;
  const { addProductCart } = useContext(cartContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="favorites">
        <div className="favorites-container">
          {productsArr.map((product) => (
            <div key={product.id}>
              <div className="card">
                <img width={133} height={120} src={product.image} alt="" />
                <div className="card-details">
                  <p>{product.title}</p>
                  <span>
                    Цена: <b>{product.price}$</b>
                  </span>
                  <div
                    className="buttons"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "auto",
                    }}
                  >
                    <AddShoppingCart
                      className="navbar-icons-icon"
                      style={{ width: "auto" }}
                      onClick={() => addProductCart(product)}
                      color={
                        checkProductInCart(product.id) ? "error" : "primary"
                      }
                    />
                    <button
                      onClick={() => {
                        navigate(`/cardDetails/${product.id}`);
                      }}
                    >
                      {" "}
                      more
                    </button>
                  </div>
                  {/* <button onClick={() => handleClickDelete(product.id)}>
                  delete
                </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Favorites;
