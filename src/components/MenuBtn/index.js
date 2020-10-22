import React, { useState } from "react";
import DropdownMenu from "../DropdownMenu";
import "./index.css";

export default function MenuBtn() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`menu-btn ${open ? "open" : ""}`}
      onClick={() => setOpen(!open)}
    >
      <div className="menu-btn__burger"></div>
      <DropdownMenu open={open} />
    </div>
  );
}
