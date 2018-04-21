import { combineReducers } from 'redux';

import GeolocationCoordinatesReducer from './reducers__geolocation_coordinates';
import RestaurantResultsReducer from './reducers__restaurant_results';
// import PhilippinesCitiesReducer from './reducers__phillippines_cities';

export default combineReducers({
    coordinates: GeolocationCoordinatesReducer,
    results: RestaurantResultsReducer
    // cities: PhilippinesCitiesReducer
});
