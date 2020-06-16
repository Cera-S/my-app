import React from 'react';
import './Data.css';
import WarmTemp from './WarmTemp';
import ColdTemp from './ColdTemp';

const Data = (props) => {
    return (
        <div>
            {props.responseObj.cod === 200 ?
            <div className="temperature">
                    <p> In {props.responseObj.name}, it is currently {Math.round(props.responseObj.main.temp)}°F.</p>
                    <div className="weather">
                        <p><img src={`https://openweathermap.org/img/w/${props.responseObj.weather[0].icon}.png`}
                            alt="{props.response.Obj.weather[0].icon}"/></p>
                        <p>{props.responseObj.weather[0].description}</p>
                    </div>

                <div className="conditions">
                    {props.responseObj.main.temp >= 70 ? 
                        <p>It's warm outside.
                            <WarmTemp />
                        </p>
                    :
                        <p>It's cold outside. 
                            <ColdTemp />
                        </p>
                    }
                </div>
            </div>
            : null}
        </div>
    )
}

export default Data;