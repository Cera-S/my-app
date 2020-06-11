import React from 'react';

const fetchedData = (props) => {
    return (
        <div>
            {props.responseObj.cod === 200 ?
            <div>
                <p> In {props.responseObj.name}, it is currently {props.responseObj.main.temp}°F.
                Feels like: {props.responseObj.main.feels_like}°F</p>
            </div>
            : null}
        </div>
    )
}

export default fetchedData;