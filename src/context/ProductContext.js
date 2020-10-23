import React, { useState } from "react";

const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState({});
  const [cart, setCart] = useState([])

  return (
    <ProductContext.Provider value={{ product, setProduct, cart,setCart }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
