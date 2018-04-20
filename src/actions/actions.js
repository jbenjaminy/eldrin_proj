/* eslint quote-props: 0 */
/* eslint quotes: 0 */
import fetch from 'isomorphic-fetch';
import {
    FETCH_RESTAURANTS_SUCCESS,
    ADD_RESTAURANT_SUCCESS,
    // FETCH_LOCATION
} from './types';

export const fetchRestaurants = (coordinates) => dispatch => (
    /** We use a POST request here, even though we're really just fetching and
    would typically be a 'GET' request, so that we can utilize request.body
    to send our geocoordinates in the request. */
	fetch('/restaurants', {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(coordinates)
    }).then(res => {
		if (!res.ok) throw (new Error(res.statusText));
		return res.json();
	}).then(({ data }) => {
		dispatch({
            type: FETCH_RESTAURANTS_SUCCESS,
            data
        });
    }).catch(err => console.log(err))
);

export const addRestaurant = (details) => dispatch => (
    fetch('/add-restaurant', {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(details)
    }).then(res => {
		if (!res.ok) throw (new Error(res.statusText));
		return res.json();
	}).then(data => {
		dispatch({
            type: ADD_RESTAURANT_SUCCESS,
            data
        });
    }).catch(err => console.log(err))
);
//
// export const fetchLocation = () => {
//   const geolocation = navigator.geolocation;
//
//   const location = new Promise((resolve, reject) => {
//     if (!geolocation) {
//       reject(new Error('Not Supported'));
//     }
//
//     geolocation.getCurrentPosition((position) => {
//       resolve(position);
//     }, () => {
//       reject (new Error('Permission denied'));
//     });
//   });
//
//   return {
//     type: FETCH_LOCATION,
//     data: location
//   }
// };
