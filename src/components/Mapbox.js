import React,{ useState } from 'react'
import mapboxgl from 'mapbox-gl';
import MapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder';
import './Mapbox.css';
import { Feature } from 'react-mapbox-gl';

mapboxgl.accessToken = 'REACT_APP_MAPBOX_TOKEN';


export const Geocode = () => {

  function getGeocode(props)
  {  
    console.log(props.cityName)
    fetch (`https://api.mapbox.com/geocoding/v5/mapbox.places/${props.cityName}.json?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`)
    .then(response => response.json())
    .then (response => response.map((point, index) => ({
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [
          point.coordinates.longitude,
          point.coordinates.latitude
        ]
      }
    })))
      .catch(err => {
        console.log(err)})
    }
  }

const Mapbox = (geocode) => {
  const [ viewport, setViewPort ] = useState({
    width: "100%",
    height: "60vh",
    lat: 10,
    lon: 500,
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

export default Mapbox;