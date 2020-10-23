import React from "react";
import "./App.css";
import Header from "./pages/Header";
import Cart from "./pages/Cart";
import Menu from "./pages/Menu";
import Order from "./pages/Order";
import { OrderProvider } from "./context/OrderContext";

function App() {
 
  return (
    <div className="App">
      <OrderProvider>
        <Header />
        <Menu />
        <Order />
        <Cart />
      </OrderProvider>
    </div>
  );
}

export default App;
