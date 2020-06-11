import React from 'react';
import './App.css';
import Weather from './components/Weather';

require('dotenv').config();


function App() {
  return (
    <div className="App">
     <body>
       <h1>Enter your location</h1>
       <Weather />
     </body>
    </div>
  );
}

export default App;