import React from 'react'
import Bag from "./shopping-bag-solid.svg"
import "./index.css"

export default function Cart() {
  return (
    <div className="cart-container">
      <div className="cart-bag-content">
        <img className="cart-bag-icon" src={Bag} alt="bag" />
        <span className="cart-bag-count">1</span>
      </div>
    </div>
  );
}
