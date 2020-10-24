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
    if (cart.length > 0) {
      setMessage(`${cart[cart.length - 1].title} added to your cart.`);
    }

    const timer = setTimeout(() => {
      setAdding(false);
      setMessage("");
    }, 2000);
    return () => clearTimeout(timer);
  }, [cart]);

  return (
    <div className="cart-container">
      <div className="cart-message">{message}</div>
      <div className="cart-bag-content">
        <img
          className={`cart-bag-icon ${adding ? "active" : ""}`}
          src={Bag}
          alt="Bag"
        />
        <span className="cart-bag-count">{cart.length}</span>
      </div>
    </div>
  );
}
