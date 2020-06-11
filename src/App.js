import React from 'react';
import './App.css';
import Weather from './components/Weather';

require('dotenv').config();


function App() {
  return (
    <div className="App">
     <main>
       <Weather />
     </main>
    </div>
  );
}

export default App;