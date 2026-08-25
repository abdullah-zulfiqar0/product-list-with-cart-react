import React from "react";
import confirmedIcon from "../assets/images/icon-order-confirmed.svg";

const OrderModel = ({ cart, startNewOrder }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img
          src={confirmedIcon}
          alt="Order Confirmed"
          className="confirmed-icon"
        />
        <h2>Order Confirmed</h2>
        <p className="subtitle">We hope you enjoy your food!</p>

        {/* Gray Container start */}
        <div className="modal-items-list">
          {cart.map((item, index) => (
            <div key={index} className="modal-item">
              <div className="modal-item-left">
                <img src={item.image.thumbnail} alt={item.name} />
                <div className="item-details">
                  <p className="item-name">{item.name}</p>
                  <p className="item-price-info">
                    <span className="qty">{item.quantity}x</span>
                    <span className="unit-price">
                      @ ${item.price.toFixed(2)}
                    </span>
                  </p>
                </div>
              </div>
              <p className="item-total-price">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}

          <div className="modal-total-box">
            <span>Order Total</span>
            <h3>${total.toFixed(2)}</h3>
          </div>
        </div>

        <button className="confirm-btn start-new-btn" onClick={startNewOrder}>
          Start New Order
        </button>
      </div>
    </div>
  );
};

export default OrderModel;
