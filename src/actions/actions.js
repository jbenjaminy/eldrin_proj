/* eslint quote-props: 0 */
/* eslint quotes: 0 */
import fetch from 'isomorphic-fetch';
import {
    FETCH_RESTAURANTS_SUCCESS,
    FETCH_LOCATION_SUCCESS,
    MATCH_SUGGESTIONS,
    UPDATE_INPUT,
    FETCH_DISTANCE_SUCCESS
} from './types';

export const fetchRestaurants = (coordinates) => dispatch => (
	fetch(`/restaurants/${coordinates.latitude}/${coordinates.longitude}`, {
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

export const fetchDistance = ({ origins, destinations, apiKey }) => dispatch => (
	fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${origins}&destinations=${destinations}&key=${apiKey}`, {
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
            type: FETCH_DISTANCE_SUCCESS,
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
