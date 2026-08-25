import React from "react";
import AddToCart from "./AddToCart";
import increment from "../assets/images/icon-increment-quantity.svg";
import decrement from "../assets/images/icon-decrement-quantity.svg";

const ProductCard = ({
  addtocart = [],
  handleIncreament,
  handleDecrement,
  handleButton,
  products,
}) => {
  const cartItem = addtocart.find((item) => item.name === products.name);

  return (
    <div className="product-card">
      <img src={products.image.desktop} alt={products.name} />

      {cartItem ? (
        <button className="cart-counter">
          <img
            onClick={() => handleDecrement(products)}
            src={decrement}
            alt="decrement"
          />
          <span style={{ color: "#ffffff", fontWeight: "bold" }}>
            {cartItem.quantity}
          </span>
          <img
            onClick={() => handleIncreament(products)}
            src={increment}
            alt="increment"
          />
        </button>
      ) : (
        <button className="cart-btn" onClick={() => handleButton(products)}>
          Add to Cart
        </button>
      )}

      <p className="category">{products.category}</p>
      <h2>{products.name}</h2>
      <p className="price">${products.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
