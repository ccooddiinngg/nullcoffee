import React, { useState } from "react";
import "./index.css";

export default function LeftNav({ setFilter }) {
  const [selected, setSelected] = useState(0)

  const items = [
    `All`,
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
      
      {items.map((item, i) => (
        <div
          className={`left-nav-category ${i === selected? "selected": ""}`} 
          key={i}
          onClick={() => {setSelected(i);setFilter(item)}}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
