import { combineReducers } from 'redux';

import GeolocationCoordinatesReducer from './reducers__geolocation_coordinates';
import RestaurantResultsReducer from './reducers__restaurant_results';
// import PhilippinoCitiesReducer from './reducers__phillippino_cities';

export default combineReducers({
    coordinates: GeolocationCoordinatesReducer,
    results: RestaurantResultsReducer
    // cities: PhilippinoCitiesReducer
});
