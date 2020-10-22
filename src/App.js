import React from 'react';
import "./App.css"
import Header from './components/Header';
import Cart from './components/Cart';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Cart />
    </div>
  );
}

export default App;
