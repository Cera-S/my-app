import React from 'react';
import './Data.css';
import WarmTemp from './WarmTemp';
import ColdTemp from './ColdTemp';
import Mapbox from './Mapbox';
import Collapsible from './Collapsible';

const Data = (props) => {
    return (
        <div>
            {props.responseObj.cod === 200 ?
            <div className="temperature">
                    <p> In {props.responseObj.name}, it is currently {Math.round(props.responseObj.main.temp)}°F.</p>
                <Collapsible responseObj={props.responseObj} />
                <div className="conditions">
                    {props.responseObj.main.temp >= 70 ? 
                        <p>
                            <WarmTemp />
                        </p>
                    :
                        <p>
                            <ColdTemp />
                        </p>
                    }
                </div>

                <div className="map">
                    <Mapbox responseObj={props.responseObj} lat={props.responseObj.lat} lon={props.responseObj.lon} />
                </div>

            </div>
            : null}
        </div>
    )
}

export default Data;