import React from "react";
import Logo from "../../components/Logo";
import MenuBtn from "../../components/MenuBtn";
import "./index.css"
export default function Header() {
  return (
    <div
      className="header-container"
    >
      <Logo />
      <MenuBtn />
      
    </div>
  );
}
