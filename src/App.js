import React from "react";
import "./App.css";
import Header from "./pages/Header";
import Cart from "./pages/Cart";
import Menu from "./pages/Menu";
import Order from "./pages/Order";
import { ProductProvider } from "./context/ProductContext";

function App() {
 
  return (
    <div className="App">
      <ProductProvider>
        <Header />
        <Menu />
        <Order />
        <Cart />
      </ProductProvider>
    </div>
  );
}

export default App;
