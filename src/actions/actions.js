/* eslint quote-props: 0 */
/* eslint quotes: 0 */
import fetch from 'isomorphic-fetch';
import {
    FETCH_RESTAURANTS_SUCCESS,
    FETCH_LOCATION_SUCCESS,
    MATCH_SUGGESTIONS,
    UPDATE_INPUT,
    UPDATE_LOCATION,
    RESET_APP_STATE
} from './types';

export const fetchRestaurants = ({ origins, distanceApiKey }) => dispatch => (
	fetch(`/restaurants/${origins}/${distanceApiKey}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(res => {
            console.log('res --> ', res);
            if (!res.ok) throw (new Error(res.statusText));
            return res.json();
    }).then(data => {
        console.log('restaurants data --> ', data);
		dispatch({
            type: FETCH_RESTAURANTS_SUCCESS,
            data
        });
    }).catch(err => console.log(err))
);

export const fetchLocation = (apiKey) => dispatch => (
	fetch(`https://www.googleapis.com/geolocation/v1/geolocate?key=${apiKey}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(res => {
            console.log('res --> ', res);
            if (!res.ok) throw (new Error(res.statusText));
            return res.json();
    }).then(data => {
        console.log('coords data --> ', data);
        const latitude = data.location.lat;
        const longitude = data.location.lng;

		dispatch({
            type: FETCH_LOCATION_SUCCESS,
            data: { latitude, longitude }
        });
    }).catch(err => console.log(err))
);

export const matchSuggestions = (data) => dispatch => (
	dispatch({
        type: MATCH_SUGGESTIONS,
        data
    })
);

export const updateInput = (data) => dispatch => (
	dispatch({
        type: UPDATE_INPUT,
        data
    })
);

export const updateLocation = (data) => dispatch => (
	dispatch({
        type: UPDATE_LOCATION,
        data
    })
);

export const resetAppState = () => dispatch => (
	dispatch({
        type: RESET_APP_STATE
    })
);
