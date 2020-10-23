import React, { useState } from "react";
import "./index.css";

export default function Order() {
  const [open, setOpen] = useState(true);
  const size = [
    "Short (8fl oz)",
    "Tall (12fl oz)",
    "Grande (16fl oz)",
    "Venti (20fl oz)",
  ];
  const item = {
    title: "Caffè Americano",
    size: size,
    src:
      "https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_1242",
  };

  return (
    <div className={`order-container ${open ? "show" : "hide"}`}>
      <img className="order-img" src={item.src} alt={item.title} />
      {item.size.map((s, i) => (
        <img
          className="order-cup-img"
          src={`cup-${s.slice(0, 1)}.png`}
          alt={s}
          key={i}
        />
      ))}
    </div>
  );
}
