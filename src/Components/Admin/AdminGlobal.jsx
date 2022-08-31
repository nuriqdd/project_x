import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { cartContext } from "../../context/CartContextProvider";
import "../Admin/AdminGlobal.css";
import { productsContextFire } from "../../context/ProductsContextProvider";

const AdminGlobal = () => {
  const { cart, getCarts, changeProductCount, deleteCartProduct } =
    useContext(cartContext);
  const {
    editProduct,
    getOneProduct,
    addProduct,
    clearInputs,
    deleteProduct,
    getProducts,
    productsArr,
  } = useContext(productsContextFire);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  }

  useEffect(() => {
    getProducts();
  }, []);
  console.log(productsArr);

  function handleClick() {
    if (!title || !price || !image || !description || !category) {
      alert("Введите все инпуты");
      return;
    }
    let product = {
      id: uuidv4(),
      title,
      price: parseInt(price),
      image,
      description,
      category,
    };

    addProduct(product);
  }

  return (
    <div className="cart">
      <button className="addNew" onClick={() => navigate("/admin")}>
        Добавить товар
      </button>
      {productsArr ? (
        <>
          {productsArr.length ? (
            <div className="boxCartTable">
              <h1 style={{ margin: "10px auto" }}>Список Товаров</h1>
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
                  {productsArr.map((elem) => (
                    <tr key={elem.id}>
                      <td>
                        <img
                          // style={{ width: "150px", height: "150px" }}
                          src={elem.image}
                          alt={elem.title}
                        />
                      </td>
                      <td>{elem.title}</td>
                      <td>{elem.price}</td>
                      <td>
                        <input
                          id="inpSum"
                          min={1}
                          type="number"
                          value={elem.count}
                          onChange={(e) =>
                            changeProductCount(elem.id, e.target.value)
                          }
                        />
                      </td>
                      <td id="textSubPrice">{elem.subPrice}</td>
                      <td>
                        <button
                          onClick={() => deleteProduct(elem.id)}
                          className="btn-del"
                        >
                          Удалить
                        </button>
                        <button
                          onClick={() => navigate(`/edit/${elem.id}`)}
                          className="btn-edit"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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

export default AdminGlobal;
