import { combineReducers } from 'redux';
import LocationReducer from './location-reducer';
import RestaurantReducer from './restaurant-reducer';

export default combineReducers({
    location: LocationReducer,
    restaurants: RestaurantReducer
});
