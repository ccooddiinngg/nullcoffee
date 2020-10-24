import React, { useState } from "react";
import MENU from "./Database"

const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {


  const [Menu] = useState(MENU)
  const [product, setProduct] = useState({});
  const [cart, setCart] = useState([])

  return (
    <ProductContext.Provider value={{ product, setProduct, cart,setCart ,Menu}}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
