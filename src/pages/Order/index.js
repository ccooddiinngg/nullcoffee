import React, { useContext, useEffect, useState } from "react";
import "./index.css";

import ProductContext from "../../context/ProductContext";

export default function Order() {
  
  const [open, setOpen] = useState(false);
  const { product, setProduct } = useContext(ProductContext);

  useEffect(() => {
    if (Object.keys(product).length > 0) {
      setOpen(true);
    }
  }, [product]);

  const handleAdd = () => {
    setProduct({});
    setOpen(false);
  };

  const handleCancel = () => {
    setProduct({});
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
      {Object.keys(product).length > 0 ? (
        <img className="order-img" src={product.src} alt={product.title} />
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
