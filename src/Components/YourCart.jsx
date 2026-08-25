import React from "react";
import illustration from "../assets/images/illustration-empty-cart.svg";
import CartProducts from "./CartProducts";
import OrderTotal from "./OrderTotal";
import CarbonNeutral from "./CarbonNeutral";

const YourCart = ({ modelOpen, handleDelete, cart }) => {
  return (
    <div className="your-cart">
      <h1>
        Your Cart <span>({cart.length})</span>
      </h1>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <img src={illustration} alt="empty cart illustration" />

          <p>Your added items will appear here</p>
        </div>
      ) : (
        cart.map((singleItem, idx) => (
          <CartProducts
            handleDelete={handleDelete}
            key={idx}
            item={singleItem}
          />
        ))
      )}

      {cart.length > 0 && (
        <>
          <OrderTotal cart={cart} />
          <CarbonNeutral />
          <button onClick={modelOpen} className="confirm-btn">
            Confirm Order
          </button>
        </>
      )}
    </div>
  );
};

export default YourCart;
