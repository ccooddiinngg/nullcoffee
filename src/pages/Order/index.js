import React, { useContext, useEffect, useState } from "react";
import "./index.css";

import OrderContext from "../../context/OrderContext";

export default function Order() {
  const [open, setOpen] = useState(false);
  const { order, setOrder } = useContext(OrderContext);

  useEffect(() => {
    if (Object.keys(order).length > 0) {
      setOpen(true);
    }
  }, [order]);

  const handleAdd = () => {
    setOrder({});
    setOpen(false);
  };

  const handleCancel = () => {
    setOrder({});
    setOpen(false);
  };

  const size = [
    "Short (8fl oz)",
    "Tall (12fl oz)",
    "Grande (16fl oz)",
    "Venti (20fl oz)",
  ];

  return (
    <div className={`order-container ${open ? "" : "hide"}`}>
      {Object.keys(order).length > 0 ? (
        <img className="order-img" src={order.src} alt={order.title} />
      ) : (
        <img
          className="order-img"
          src="https://globalassets.starbucks.com/assets/819df1d59b5946abb7df45ba7d89a933.jpg?impolicy=1by1_wide_1242"
          alt="Coffee"
        />
      )}

      <div>
        <div className="order-size-group">
          {size.map((s, i) => (
            <div
              className="order-cup-size"
              key={i}
              onClick={() => console.log(s)}
            >
              {s.slice(0, 1)}
            </div>
          ))}
        </div>
        <div className="order-btn-group">
          <div className="order-btn-cancel" onClick={handleCancel}>
            X
          </div>
          <div className="order-btn-ok" onClick={handleAdd}>
            Add
          </div>
        </div>
      </div>
    </div>
  );
}
