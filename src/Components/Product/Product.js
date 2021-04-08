import React from "react";
import { useHistory } from "react-router-dom";
import "./Product.css";
import shoppingCart from "../../icons/shopping-cart 1.png";

const Product = (props) => {
  const { _id, imageURL, name, price, quantity } = props.product;
  const history = useHistory();
  const handleBuyNow = () => {
    history.push(`/checkout/${_id}`);
  };
  return (
    <div>
      <div className="each-product-card">
        <img src={imageURL} alt="" />
        <h5>{name}</h5>
        <p>{quantity}</p>
        <h6>{price}tk</h6>
        <button className="buy-btn btn btn-primary" onClick={handleBuyNow}>
          <img
            style={{ width: "20px", height: "20px" }}
            src={shoppingCart}
            alt=""
          />{" "}
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Product;
