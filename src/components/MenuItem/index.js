import React, { useContext } from "react";
import "./index.css";

import ProductContext from "../../context/ProductContext";
export default function MenuItem({ item }) {
  const { setProduct } = useContext(ProductContext);
  return (
    <div className="menu-item-container" onClick={() => setProduct(item)}>
      <img className="menu-item-img" src={item.src} alt={item.title} />
      <div className="menu-item-title">{item.title}</div>
    </div>
  );
}
