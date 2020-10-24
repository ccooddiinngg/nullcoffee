import React, { useContext, useEffect, useState } from "react";
import Bag from "./shopping-bag-solid.svg";
import "./index.css";
import ProductContext from "../../context/ProductContext";

export default function Cart() {
  const { cart, setCart } = useContext(ProductContext);
  const [extend, setExtend] = useState(false);

  const [adding, setAdding] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setAdding(true);
    if (cart.length > 0 && !extend) {
      setMessage(`${cart[cart.length - 1].title} added to your cart.`);
    }
    if (cart.length === 10) {
      setMessage("Cart is full!");
    }

    const timer = setTimeout(() => {
      setAdding(false);
      setMessage("");
    }, 2000);
    return () => clearTimeout(timer);
  }, [cart]);

  const handleRemove = (i) => {
    setCart(cart.filter((_item, _i) => _i !== i));
  };

  return (
    <>
      <div className={`cart-details ${extend ? "" : "hide"}`}>
        <CartDetail
          cart={cart}
          handleRemove={handleRemove}
          setExtend={setExtend}
        />
      </div>
      <div className="cart-container">
        <div className="cart-message">{message}</div>
        <div className="cart-bag-content" onClick={() => setExtend(!extend)}>
          <img
            className={`cart-bag-icon ${adding ? "active" : ""}`}
            src={Bag}
            alt="Bag"
          />
          <span className="cart-bag-count">{cart.length}</span>
        </div>
      </div>
    </>
  );
}

function CartDetail({ cart, handleRemove, setExtend }) {
  return (
    <div>
      <div className="cart-detail-close-btn" onClick={() => setExtend(false)}>
        X
      </div>
      {cart.length === 0
        ? "Cart is empty..."
        : `Total ${cart.length} item${
            cart.length === 1 ? "" : "s"
          } in your cart.`}
      <div>
        {cart.map((item, i) => (
          <div className="cart-detail-item" key={i}>
            <span className="cart-detail-item-text">{item.title}</span>
            <span className="cart-detail-item-text">{item.size}</span>
            <span className="cart-detail-item-text">
              {showPrice(item.price)}
            </span>
            <div
              className="cart-detail-item-btn"
              onClick={() => handleRemove(i)}
            >
              ✕
            </div>
          </div>
        ))}
      </div>
      <div className="cart-detail-total-price">
        {cart.length > 0 && `Total: ${showPrice(showTotal(cart))}`}
      </div>
    </div>
  );
}

function showPrice(price) {
  return `${Number.parseFloat(price / 100).toFixed(2)} $`;
}

function showTotal(cart) {
  return cart.reduce((acc, item) => (acc += item.price), 0);
}
