import React, { useEffect } from "react";
import axios from "axios";
import Product from "./Product";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";

export default function ProductList() {
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.error("Error in API call", err);
      });
    dispatch(setProducts(response.data));
  };
  const displayScrollTopButton = () => {
    if (window.pageYOffset > 300) {
      document.querySelector(".scroll-top") &&
        document.querySelector(".scroll-top").classList.remove("hidden");
    } else {
      document.querySelector(".scroll-top") &&
        document.querySelector(".scroll-top").classList.add("hidden");
    }
  };
  useEffect(() => {
    fetchProducts();
    document.addEventListener("scroll", () => {
      displayScrollTopButton();
    });
  });
  return (
    <div className="ui grid container">
      <Product />
      <i
        title="Scroll to Top"
        onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
        className="scroll-top hidden angle double up icon"
      ></i>
    </div>
  );
}
