import React, { useContext, useState } from "react";
import { productsContextFire } from "../../context/ProductsContextProvider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../Products/AddProduct.css";

export default function AddProduct() {
  const { addProduct, clearInputs } = useContext(productsContextFire);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  }

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
    <div className="addProduct">
      <TextField
        sx={{ width: 300 }}
        id="outlined-basic"
        label="Product name"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        sx={{ width: 300 }}
        id="outlined-basic"
        label="Price"
        variant="outlined"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <TextField
        sx={{ width: 300 }}
        id="outlined-basic"
        label="Photo"
        variant="outlined"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <TextField
        sx={{ width: 300 }}
        id="outlined-basic"
        label="Description"
        variant="outlined"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <TextField
        sx={{ width: 300 }}
        id="outlined-basic"
        label="Category"
        variant="outlined"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <Button onClick={handleClick} variant="contained" disableElevation>
        Add Product
      </Button>
    </div>
  );
}
