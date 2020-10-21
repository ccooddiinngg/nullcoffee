import React from 'react';
import Login from './components/Login.js';
import Menu from './components/Menu/index.js';
import "./App.css"

function App() {
  return (
    <div className="App">
      <Menu/>
      <Login/>
    </div>
  );
}

export default App;
