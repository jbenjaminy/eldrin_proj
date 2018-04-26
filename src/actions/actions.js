/* eslint quote-props: 0 */
/* eslint quotes: 0 */
import fetch from 'isomorphic-fetch';
import {
    FETCH_RESTAURANTS_SUCCESS,
    MATCH_SUGGESTIONS,
    UPDATE_INPUT
    // FETCH_LOCATION
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
        console.log('data --> ', data);
		dispatch({
            type: FETCH_RESTAURANTS_SUCCESS,
            data
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
