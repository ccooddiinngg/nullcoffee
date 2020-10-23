import React, { useContext } from "react";
import "./index.css";

import OrderContext from '../../context/OrderContext'
export default function MenuItem({item}) {

  const {setOrder} = useContext(OrderContext);
  return (
    <div className="menu-item-container" onClick={()=>setOrder(item)}>
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
