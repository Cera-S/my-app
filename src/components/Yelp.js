import React, { Component } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Restaurants from './Restaurants';

// class Yelp extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             searchResults: []
//         };
//     }

//     componentDidMount() {
//         axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${this.cityName}`,{
//             headers: {
//                 Authorization: `Bearer ${process.env.REACT_APP_YELP_KEY}`
//             },
//             params: {
//                 categories: 'restaurants',
//                 limit: 10
//             }
//         })
//         .then(response => {
//             response.data.businesses.map(business => {
//                 return {
//                     name: business.name,
//                     rating: business.rating
//                 }
//             })
//         })
//         .catch(err => {
//           console.log(err)})
//     }

//     render () {
//         return (
//             <div className="results">
//             </div>
//         )}
// }

const Yelp = (props) => {
    let [place, setPlace] = useState({});
    
    function fetchPlace(e)
    {
        axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${props.cityName}`,{
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_YELP_KEY}`
            },
            params: {
                categories: 'restaurants',
                limit: 10
            }
        })
        .then(response => response.json())
        .then (response => {
          setPlace(place.data.businesses.map(res => ({
              name: res.name,
              rating: res.rating,
              image: res.image_url,
          }))
          );
        })
        .catch(err => {
        console.log(err)})
    }

        return (
            <div>
                <ul>
                    
                </ul>
            </div>
        );
}

export default Yelp