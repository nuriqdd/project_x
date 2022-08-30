import { AddShoppingCart } from "@mui/icons-material";
import React, { useContext, useEffect } from "react";
import liked from "../../Image/liked.svg";
import { useProducts } from "../../context/ProductsContextProvider";
import { checkProductInCart } from "../../helpers/cartFunctions";
import { cartContext } from "../../context/CartContextProvider";
import { useParams } from "react-router-dom";
import { ADMINS } from "../../helpers/consts";
import { authContext } from "../../context/AuthContext";

const Carddetails = () => {
  const { productDetails, getOneProduct } = useProducts();
  const { addProductCart } = useContext(cartContext);
  const { id } = useParams();
  const { user } = useContext(authContext);

  useEffect(() => {
    getOneProduct(id);
  }, []);

  const checkAdmin = (email) => {
    return ADMINS.includes(email);
  };

  return (
    <>
      {!productDetails ? (
        <>Loading</>
      ) : (
        <div key={productDetails.id} className="card-exact">
          <div className="card exact">
            <img width={133} height={120} src={productDetails.image} alt="" />
            <div className="card-details">
              <p>{productDetails.title}</p>
              <span>
                Цена: <b>{productDetails.price}$</b>
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
                <img width={40} height={40} src={liked} alt="like" />
                <AddShoppingCart
                  className="navbar-icons-icon"
                  style={{ width: "auto" }}
                  onClick={() => addProductCart(productDetails)}
                  color={
                    checkProductInCart(productDetails.id) ? "error" : "primary"
                  }
                />
              </div>
              <div className="admin-panel">
                {checkAdmin(user.email) ? (
                  <>
                    <button>delete</button>
                    <button>edit</button>
                  </>
                ) : (
                  <></>
                )}
              </div>
              {/* <button onClick={() => handleClickDelete(product.id)}>
                            delete
                        </button> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Carddetails;
