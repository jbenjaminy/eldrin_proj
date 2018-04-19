import fetch from 'isomorphic-fetch';
import {
    FETCH_RESTAURANTS_SUCCESS,
    FETCH_RESTAURANT_DETAILS,
    FETCH_LOCATION
} from './types';

export const fetchRestaurants = () => dispatch => (
	fetch('/restaurants').then(res => {
		if (!res.ok) throw (new Error(res.statusText));
		return res.json();
	}).then(data => {
		dispatch({
            type: FETCH_RESTAURANTS_SUCCESS,
            data
        });
    }).catch(err => console.log(err))
);

export const fetchRestaurantDetails = () => dispatch => (
	fetch('/restaurants').then(res => {
		if (!res.ok) throw (new Error(res.statusText));
		return res.json();
	}).then(data => {
		dispatch({
            type: FETCH_RESTAURANT_DETAILS,
            data
        });
    }).catch(err => console.log(err))
);

export const fetchLocation = () => {
  const geolocation = navigator.geolocation;

  const location = new Promise((resolve, reject) => {
    if (!geolocation) {
      reject(new Error('Not Supported'));
    }

    geolocation.getCurrentPosition((position) => {
      resolve(position);
    }, () => {
      reject (new Error('Permission denied'));
    });
  });

  return {
    type: FETCH_LOCATION,
    data: location
  }
};
