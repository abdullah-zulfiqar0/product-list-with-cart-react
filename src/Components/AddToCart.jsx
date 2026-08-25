import React from "react";
import addcart from "../assets/images/icon-add-to-cart.svg";

const AddToCart = ({ products, setshowCounter, handleButton }) => {
  return (
    <button
      className="cart-btn"
      onClick={() => {
        handleButton(products);
        setshowCounter(true);
      }}
    >
      <img src={addcart} alt="cart-shop-img" />
      Add to Cart
    </button>
  );
};

export default AddToCart;
