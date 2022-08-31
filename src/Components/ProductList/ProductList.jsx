import React from "react";
import logotype from "../../Image/logotype.png";
import cart from "../../Image/cart.svg";
import ReactPaginate from "react-paginate";
import { useContext, useState, useEffect } from "react";
import { useProducts } from "../../context/ProductsContextProvider";
import liked from "../../Image/liked.svg";
import { AddShoppingCart } from "@mui/icons-material";
import { checkProductInCart } from "../../helpers/cartFunctions";
import { cartContext } from "../../context/CartContextProvider";
import Filter from "../ProductList/Filter";
import { useNavigate, useSearchParams } from "react-router-dom";
import Card from "../Products/Card";

const Productlist = () => {
  const { getProducts, productsArr, pageTotalCount, deleteProduct } =
    useProducts();

  // const [searchParams, setSearchParams] = useSearchParams();

  const [type, setType] = useState("all");
  const [value, setValue] = useState("");

  const [filtredData, setFiltredData] = useState([]);

  const [price, setPrice] = useState([0, 1500]);

  const [page, setPage] = useState(1);

  const { addProductCart, addLikeToProduct } = useContext(cartContext);

  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(0);

  const getFiltredProducts = () => {
    const filtred = productsArr.filter((item) => {
      return item.title?.toLowerCase().includes(value.toLocaleLowerCase());
    });
    if (filtred.length) {
      setFiltredData(filtred);
    } else {
      setFiltredData(productsArr);
    }
  };

  // useEffect(() => {
  //   getProducts(type, price[0], price[1]);
  //   if (searchParams.get("category")) {
  //     setSearchParams(paramsWithType());
  //   } else {
  //     setSearchParams(paramsNoType());
  //   }
  // }, []);

  // const paramsWithType = () => {
  //   return {
  //     category: type,
  //     q: searchParams.get("q") || "",
  //     price_gte: price[0],
  //     price_lte: price[1],
  //     _page: page,
  //     _limit: 6,
  //   };
  // };

  // const paramsNoType = () => {
  //   return {
  //     q: searchParams.get("q") || "",
  //     price_gte: price[0],
  //     price_lte: price[1],
  //     _page: page,
  //     _limit: 6,
  //   };
  // };

  useEffect(() => {
    getProducts(type, price[0], price[1]);
  }, [type, value]);

  useEffect(() => {
    getFiltredProducts();
  }, [productsArr]);

  let limitPage = 5;

  let pageVisit = limitPage * currentPage;

  let countPage = Math.ceil(productsArr.length / limitPage);
  // const DeleteProductEntity = (id) => {
  //   console.log(id);
  // };

  async function handleClickDelete(id) {
    await deleteProduct(id);
  }

  const changePage = ({ selected }) => {
    setCurrentPage(selected);
  };
  console.log(pageVisit, pageVisit, limitPage);
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <img width={70} height={70} src={logotype} alt="logo" />
          <div>
            <h3>Шато</h3>
            <p>Магазин Хороших Вин</p>
          </div>
        </div>
        <div className="headerRight">
          <div className="search">
            <input type="text" placeholder="search..." />
          </div>
          <ul className="right-ul">
            <li>
              <img width={20} height={20} src={cart} alt="cart" />
            </li>
            <li>
              <span>1500c</span>
            </li>
          </ul>
        </div>
      </header>
      <div></div>
      <div className="content">
        <div className="header-wine">
          <h1>Все вина</h1>
          <div className="search">
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type="text"
              placeholder="search..."
            />
          </div>
        </div>
        <div className="cards" style={{ padding: "50px" }}>
          <div className="filter">
            <Filter
              type={type}
              setType={setType}
              price={price}
              setPrice={setPrice}
            />
            {/* <div className="container1">
                {productsArr
                  .slice(pageVisit, pageVisit + limitPage)
                  .map((item) => (
                    <Card product={item} key={item.id} />
                  ))}
              </div> */}
          </div>
          <div className="content-cards">
            {filtredData
              .slice(pageVisit, pageVisit + limitPage)
              .map((product) => (
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
                        <img
                          onClick={() => addLikeToProduct(product)}
                          width={40}
                          height={40}
                          src={liked}
                          alt="like"
                        />
                        <AddShoppingCart
                          className="navbar-icons-icon"
                          style={{ width: "auto" }}
                          onClick={() => addProductCart(product)}
                          color={
                            checkProductInCart(product.id) ? "error" : "primary"
                          }
                        />
                        <button
                          className="but-but"
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
      </div>
      <ReactPaginate
        previousLabel="назад"
        nextLabel="вперед"
        onPageChange={changePage}
        pageCount={countPage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};

export default Productlist;
