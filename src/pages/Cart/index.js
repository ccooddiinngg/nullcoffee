import React, { useContext } from "react";
import Bag from "./shopping-bag-solid.svg";
import "./index.css";
import ProductContext from "../../context/ProductContext";

export default function Cart() {
  const { cart, setCart } = useContext(ProductContext);

  return (
    <div className="cart-container">
      <div className="cart-bag-content">
        <img className="cart-bag-icon" src={Bag} alt="bag" />
        <span className="cart-bag-count">{cart.length}</span>
      </div>
    </div>
  );
}
