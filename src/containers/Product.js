import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Product() {
  const products = useSelector((state) => state.allProducts.products);
  return (
    <>
      {products && products.length > 0 ? (
        products.map((product) => {
          const { id, title, image, category, price } = product;
          return (
            <div className="four wide column" key={id} title={title}>
              <Link to={`/product/${id}`}>
                <div className="ui link cards">
                  <div className="card">
                    <div className="image">
                      <img src={image} alt={title} />
                    </div>
                    <div className="content">
                      <div className="header">{title}</div>
                      <div className="meta price">
                        ₹ {Math.ceil(price * 80)}
                      </div>
                      <div className="meta">{category}</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })
      ) : (
        <div className="ui segment loader_">
          <div className="ui active inverted dimmer">
            <div className="ui text loader">Loading...</div>
          </div>
          <p></p>
        </div>
      )}
    </>
  );
}
