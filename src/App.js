import React from "react";
import "./App.css";
import Header from "./pages/Header";
import Cart from "./pages/Cart";
import Menu from "./pages/Menu";
import Order from "./pages/Order";

function App() {
  
  return (
    <div className="App">
      <Header />
      <Menu/>
      <Order/>
      <Cart/>
    </div>
  );
}

export default App;
