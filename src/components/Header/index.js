import React from "react";
import Logo from "../Logo";
import MenuBtn from "../MenuBtn";

export default function Header() {
  return (
    <div
      style={{
        position:"fixed",
        top:0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100vw",
        height: 80,
        alignSelf: "center",
        boxShadow: "1px 1px 2px #461A10",
        zIndex:100,
        backgroundColor: "white"
      }}
    >
      <Logo />
      <MenuBtn />
      
    </div>
  );
}
