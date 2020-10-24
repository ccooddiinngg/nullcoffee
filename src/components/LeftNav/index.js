import React from "react";
import "./index.css";

export default function LeftNav({ setFilter }) {
  const items = [
    `Americanos`,
    "Brewed Coffees",
    `Cappuccinos`,
    "Espresso Shots",
    `Lattes`,
    `Mochas`,
    "Tumbler",
  ];
  return (
    <div className="left-nav-container">
      <div className="left-nav-category" onClick={() => setFilter("")}>
        All
      </div>
      {items.map((item, i) => (
        <div
          className="left-nav-category"
          key={i}
          onClick={() => setFilter(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
