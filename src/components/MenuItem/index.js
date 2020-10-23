import React from "react";
import "./index.css";
export default function MenuItem({item}) {
  return (
    <div className="menu-item-container" onClick={()=>console.log(item.title)}>
      <img
        className="menu-item-img"
        src={item.src}
        alt={item.title}
      />
      <div className="menu-item-title">
      {item.title}
      </div>
    </div>
  );
}
