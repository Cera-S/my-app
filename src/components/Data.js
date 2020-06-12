import React from 'react';
import './Data.css';

const Data = (props) => {
    return (
        <div>
            {props.responseObj.cod === 200 ?
                <div className="temperature">
                    <p> In {props.responseObj.name}, it is currently {Math.round(props.responseObj.main.temp)}°F.</p>
                    <div className="weather">
                        <p><img src={`http://openweathermap.org/img/w/${props.responseObj.weather[0].icon}.png`}
                            alt="{props.response.Obj.weather[0].icon}"/></p>
                        <p>{props.responseObj.weather[0].description}</p>
                    </div>
                </div>
            : null}
            </div>
    )
}

export default Data;