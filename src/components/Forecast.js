import React from 'react';
import { useState } from 'react';
import Data from './Data';

require('dotenv').config();

export const Forecast = () => {
  
    let [responseObj, setResponseObj] = useState({});
    let [cityName, setCityName] = useState('');
  
    function getForecast(e)
    {
      e.preventDefault();
      fetch(`api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}`)
        .then(response => response.json())
        .then (response => {
          setResponseObj(response)
        })
        .catch(err => {
          console.log(err)})
    }
  
    return (
        <div className="input-box">
          <h1>Check the Weather:</h1>
          <div>
              {JSON.stringify(responseObj)}
          </div>

          <form onSubmit={getForecast}>
            <input
              type="text"
              placeholder="Enter City"
              value={cityName}
              onChange={(e) => setCityName(e.target.value)}
            />

            <button type="submit"> Get Forecast</button>
            <Data responseObj={responseObj}/>
          </form>

        </div>
    )
  }

  export default Forecast;