import { AddShoppingCart } from "@mui/icons-material";
import React from "react";

const Card = () => {
  <div>
    <div className="card">
      <img width={133} height={120} src="" alt="" />
      <div className="card-details">
        <p>product.title</p>
        <span>
          Цена: <b>product.price$</b>
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
          <img
            // onClick={() => addLikeToProduct(product)}
            width={40}
            height={40}
            // src={liked}
            alt="like"
          />
          <AddShoppingCart
            className="navbar-icons-icon"
            style={{ width: "auto" }}
            // onClick={() => addProductCart(product)}
            // color={checkProductInCart(product.id) ? "error" : "primary"}
          />
          <button className="but-but"> more</button>
        </div>
        {/* <button onClick={() => handleClickDelete(product.id)}>
                        delete
                      </button> */}
      </div>
    </div>
  </div>;
  return <div></div>;
};

export default Card;
