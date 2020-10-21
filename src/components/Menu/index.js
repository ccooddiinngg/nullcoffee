import React, { useState } from "react";
import "./index.css";

export default function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <div className={`menu-btn ${open? "open" : ""}`} onClick={() => setOpen(!open)}>
      <div className="menu-btn__burger"></div>
    </div>
  );
}
