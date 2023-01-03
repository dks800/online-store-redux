import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";
import { Link } from "react-router-dom";

export default function ProductDetails(props) {
  const { productId } = useParams();
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const fetchProductDetails = async () => {
    const productDetails = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.error("Error in Fetchin Product detials", err);
      });
    dispatch(selectedProduct(productDetails.data));
  };

  useEffect(() => {
    window.scroll(0, 0);
    productId && productId !== "" && fetchProductDetails();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div className="ui grid container product-details">
      <Link to="/">
        <button className="ui left labeled icon button">
          <i className="left arrow icon"></i>
          Back
        </button>
      </Link>
      {Object.keys(product).length === 0 ? (
        <div className="ui segment loader_">
          <div className="ui active inverted dimmer">
            <div className="ui text loader">Loading...</div>
          </div>
          <p></p>
        </div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img
                  src={product.image}
                  alt={product.title}
                  className="ui fluid image"
                />
              </div>
              <div className="column rp">
                <h1>{product.title}</h1>
                <h2>
                  <a className="ui teal tag label">
                    ₹ {Math.ceil(product.price * 80)}
                  </a>
                </h2>
                <h3 className="ui brown block header">
                  {product.category.toUpperCase()}
                </h3>
                <p>{product.description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
