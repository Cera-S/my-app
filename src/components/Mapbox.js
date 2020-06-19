import React, { useState } from 'react'
import mapboxgl from 'mapbox-gl';
import MapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css'
import './Mapbox.css'


mapboxgl.accessToken = 'REACT_APP_MAPBOX_TOKEN';
  
  const Mapbox = (props) => {    
    const [ viewport, setViewPort ] = useState({
      width: "100%",
      height: "60vh",
      latitude: props.responseObj.lat,
      longitude: props.responseObj.lon,
      zoom: 10
    });

    return (
      <div className="center">
        <MapGL
          {...viewport} // pass to component
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          mapStyle="mapbox://styles/cerasams/ckbinh6se08yd1iqj9j4m8o8w"
          onViewportChange={(viewport) => {
              setViewPort(viewport);
          }}
        >
        </MapGL>
      </div>
    )
  }
  
  export default Mapbox