import React from 'react';
import { render } from 'react-dom';
import { useState } from 'react';

require('dotenv').config();

const Forecast = () => {
  
  const [fetchForecastData, forecastData] = useState({});

  function getForecast ()
  {
      fetch("https://community-open-weather-map.p.rapidapi.com/weather?callback=test&id=2172797&units=%2522metric%2522%20or%20%2522imperial%2522&mode=xml%252C%20html&q=Seattle", {
          "method": "GET",
          "headers": {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_API_KEY
          }
        })
        .then(response => response.json())
        .then (response => {
          fetchForecastData(forecastData)
        })
  }

  return (
      <div>
      <h1>Check the Weather:</h1>
      <div>
          {JSON.stringify(forecastData)}
      </div>
      <button onClick={getForecast}> Get Forecast</button>
      </div>
  )
}


class Weather extends React.Component {
  state = {
    loading: false,
    error: null,
    data: ""
  }
  
  
  componentDidMount() {
    this.setState({loading: true})
    fetch("https://community-open-weather-map.p.rapidapi.com/weather?callback=test&id=2172797&units=%2522metric%2522%20or%20%2522imperial%2522&mode=xml%252C%20html&q=Seattle", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API_KEY
      }
    })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
}


  render(){
    return (
      <div>
        <Forecast />
      </div>
    )
  }
}

render(
  <Weather />,
  document.getElementById('root')
);
