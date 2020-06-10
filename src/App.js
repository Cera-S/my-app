import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Weather } from "./index";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
     </header>
     <main>
       <Weather />
     </main>
    </div>
  );
}

export default App;
