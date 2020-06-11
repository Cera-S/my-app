import React from 'react';
import Forecast from './Forecast';

require('dotenv').config();

class Weather extends React.Component {
    state = {
      loaded: false,
    }
    
    componentDidMount() {
      this.setState({loaded: true})
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