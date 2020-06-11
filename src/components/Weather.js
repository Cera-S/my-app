import React from 'react';
import Forecast from './Forecast';

require('dotenv').config();

class Weather extends React.Component {
    state = {
      loaded: false,
    }
    
    componentDidMount() {
      this.setState({loaded: true})
      // fetch("https://community-open-weather-map.p.rapidapi.com/weather?id=2172797&units=%2522metric%2522%20or%20%2522imperial%2522&mode=xml%252C%20html&q=Seattle", {
      //   "method": "GET",
      //   "headers": {
      //     "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      //     "x-rapidapi-key": process.env.REACT_APP_API_KEY
      //   }
      // })
      // .then(response => {
      //   console.log(response);
      // })
      // .catch(err => {
      //   console.log(err);
      // });
  }
  
  
    render(){
      return (
        <div>
          <Forecast />
        </div>
      )
    }
  }

  export default Weather;