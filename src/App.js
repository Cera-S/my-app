import React from 'react';
import './App.css';
import Weather from './components/Weather';

require('dotenv').config();


function App() {
  return (
    <body>
      <div className="App">
        <h1>Enter your city</h1>
        <Weather />
      </div>
    </body>
  );
}

export default App;