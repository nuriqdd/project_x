import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  orderBy,
  query,
  updateDoc,
  where,
  startAt,
  endAt,
} from "firebase/firestore";
import fire from "../fire";

export const productsContextFire = createContext();

export const useProducts = () => {
  return useContext(productsContextFire);
};

const INIT_STATE = {
  products: [],
  productDetails: {},
};
const reducer = (prevState = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...prevState,
        products: action.payload,
      };
    case "GET_ONE_PRODUCT":
      return { ...prevState, productDetails: action.payload };
    default:
      return prevState;
  }
};
const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const navigate = useNavigate();

  const db = getFirestore(fire);

  const getProducts = async (type, start, end) => {
    console.log(1, type);
    try {
      let querySnapshot = {};
      if (type === "all") {
        let q = query(
          collection(db, "products"),
          orderBy("price"),
          startAt(start),
          endAt(end)
        );
        querySnapshot = await getDocs(q);
      } else if (type !== "all") {
        let q = query(
          collection(db, "products"),
          where("category", "==", type),
          orderBy("price"),
          startAt(start),
          endAt(end)
        );
        querySnapshot = await getDocs(q);
      }
      let array = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      dispatch({
        type: "GET_PRODUCTS",
        payload: array,
      });
    } catch (e) {
      console.error(e);
    }
  };

  const getOneProduct = async (id) => {
    try {
      let data = await getDocs(collection(db, "products"));
      let productDet = {};
      data.docs.forEach((doc) =>
        doc.id === id ? (productDet = doc.data()) : null
      );
      dispatch({
        type: "GET_ONE_PRODUCT",
        payload: productDet,
      });
    } catch (e) {
      console.error(e);
    }
  };
  const addProduct = async (product) => {
    try {
      await addDoc(collection(db, "products"), product);
      getProducts();
    } catch (e) {
      console.log(e);
    }
  };

  const deleteProduct = async (id) => {
    try {
      let products = doc(db, "products", id);
      await deleteDoc(products);
      getProducts();
      navigate("/products");
    } catch (e) {
      console.error(e);
    }
  };

  const editProduct = async (id, obj) => {
    try {
      let editedProduct = doc(db, "products", id);
      await updateDoc(editedProduct, obj);
      getProducts();
      navigate("/products");
    } catch (e) {
      console.error(e);
    }
  };

  const cloud = {
    getProducts,
    getOneProduct,
    addProduct,
    deleteProduct,
    editProduct,
    productsArr: state.products,
    productDetails: state.productDetails,
    pageTotalCount: state.pageTotalCount,
  };

  return (
    <productsContextFire.Provider value={cloud}>
      {children}
    </productsContextFire.Provider>
  );
};
export default ProductsContextProvider;
