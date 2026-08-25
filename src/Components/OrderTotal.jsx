import React from "react";

const OrderTotal = ({ cart }) => {
  const total = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <div className="orders">
      <p className="order-detail">Order Total</p>

      <p>${total.toFixed(2)}</p>
    </div>
  );
};

export default OrderTotal;
