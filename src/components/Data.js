import React from 'react';

const convertToFahrenheit = (temp) => {
    (temp - 273.15).toFixed(0);
}

const fetchedData = (props) => {
    return (
        <div>
            {props.responseObj.cod === 200 ?
            <div>
                <p> In {props.responseObj.name}, it is currently {props.responseObj.main.temp}° Fahrenheit.</p>
            </div>
            : null}
        </div>
    )
}

export default fetchedData;