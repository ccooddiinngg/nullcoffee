import React from "react";
import "./index.css";

const menu = ["Order", "Rewards", "Sign in", "Logout"];
export default function DropdownMenu({ open }) {
  return (
    <div className={`main-menu ${open ? "" : "hide"}`}>
      <div className="main-menu-title">Menu</div>
      <ul>
        {menu.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
