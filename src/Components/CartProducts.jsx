import React from "react";

const CartProducts = ({ handleDelete, item }) => {
  return (
    <div className="cart-products">
      <div className="cart-item-details">
        <p className="product-name">{item.name}</p>
        <div className="product-prices">
          <span className="quantity">{item.quantity}x</span>
          <span className="unit-price">@ ${item.price.toFixed(2)}</span>
          <span className="total-price">
            ${(item.price * item.quantity).toFixed(2)}
          </span>
        </div>
      </div>

      <button onClick={() => handleDelete(item)} className="remove-item">
        &#10005;
      </button>
    </div>
  );
};

export default CartProducts;
