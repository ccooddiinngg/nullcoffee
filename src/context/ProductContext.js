import React, { useState } from "react";

const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState({});

  return (
    <ProductContext.Provider value={{ product, setProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
