import React, { useContext, useEffect, useState } from "react";
import "./index.css";

import ProductContext from "../../context/ProductContext";

export default function Order() {
  const [selected, setSelected] = useState(2);
  const [order, setOrder] = useState({});
  const [open, setOpen] = useState(false);
  const { product, setProduct, cart, setCart } = useContext(ProductContext);

  useEffect(() => {
    if (Object.keys(product).length > 0) {
      setOpen(true);
      setSelected(2)
      setOrder({ ...order, title: product.title, size: size[selected] });
    }
  }, [product]);

  const handleAdd = () => {
    setCart([...cart, order]);
  };

  const handleCancel = () => {
    setProduct({});
    setSelected(2)
    setOpen(false);
  };

  const size = ["S", "T", "G", "V"];

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
              className={`order-cup-size ${i === selected ? "selected" : ""}`}
              key={i}
              onClick={() => {
                setSelected(i);
                setOrder({ ...order, size: s });
              }}
            >
              {s}
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
