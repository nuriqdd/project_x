import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../context/CartContextProvider";
import "./Cart.css";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";

const Cart = () => {
  const { cart, getCarts, changeProductCount, deleteCartProduct } =
    useContext(cartContext);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  useEffect(() => {
    getCarts();
  }, []);
  console.log(cart);
  return (
    <div className="cart">
      {cart.products ? (
        <>
          {cart.products.length ? (
            <div className="boxCartTable">
              <h1 style={{ margin: "10px auto" }}>Cart</h1>
              <table align="center" border={1} className="tableCart">
                <thead>
                  <tr>
                    <th>Фото</th>
                    <th>Название</th>
                    <th>Цена</th>
                    <th>Количество</th>
                    <th>Сумма продукта</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.products.map((elem) => (
                    <tr key={elem.item.id}>
                      <td>
                        <img src={elem.item.image} alt={elem.item.title} />
                      </td>
                      <td>{elem.item.title}</td>
                      <td>{elem.item.price}</td>
                      <td>
                        <input
                          id="inpSum"
                          min={1}
                          type="number"
                          value={elem.count}
                          onChange={(e) =>
                            changeProductCount(elem.item.id, e.target.value)
                          }
                        />
                      </td>
                      <td id="textSubPrice">{elem.subPrice}</td>
                      <td>
                        <button
                          onClick={() => deleteCartProduct(elem.item.id)}
                          className="btn"
                        >
                          Удалить
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h4>Общая сумма: {cart.totalPrice} сом</h4>
              <button
                className="btn btn-success mt-4"
                onClick={handleClickOpen}
              >
                Оформить заказ
              </button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
              >
                <DialogTitle id="form-dialog-title">
                  Оформление Заказа
                </DialogTitle>
                <DialogContent>
                  <DialogContentText> Заполните поля</DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="your name"
                    type="text"
                    fullWidth
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="your email"
                    type="email"
                    fullWidth
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="adress"
                    label="your adress"
                    type="text"
                    fullWidth
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    cansel
                  </Button>
                  <Button onClick={() => navigate("/pay")} color="primary">
                    Byu now
                  </Button>
                </DialogActions>
              </Dialog>
              ;
            </div>
          ) : (
            <div className="bgCart">
              <h1 style={{ margin: "0 auto" }}>
                В данный момент корзина пустая
              </h1>
              <img
                id="nullCart"
                alt="notFound"
                src="https://cdn-icons-png.flaticon.com/512/6598/6598519.png"
              />
            </div>
          )}
        </>
      ) : (
        <h2>...loading</h2>
      )}
    </div>
  );
};

export default Cart;
