import React from 'react';
import { useState } from 'react';
import Data from './Data';
import './Forecast.css'
import Yelp from './Yelp';
import SearchIcon from '@material-ui/icons/Search';

require('dotenv').config();

export const Forecast = () => {
  
    let [responseObj, setResponseObj] = useState({});
    let [cityName, setCityName] = useState('');
  
    function getForecast(e)
    {
      e.preventDefault();

      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`)
        .then(response => response.json())
        .then (response => {
          setResponseObj(response)
        })
        .catch(err => {
          console.log(err)})
    }
  
    return (
        <div className="input-box">
          <form onSubmit={getForecast}>
            <input
                type="text"
                placeholder="Search"
                value={cityName}
                onChange={(e) => setCityName(e.target.value)}
            />
            <button type="submit">
              <SearchIcon />
            </button>
            <Data responseObj={responseObj}/>
            <Yelp cityName={cityName} />
          </form>
        </div>
    )
  }

  export default Forecast;