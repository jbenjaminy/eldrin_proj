import { combineReducers } from 'redux';

import GeolocationCoordinatesReducer from './reducers__geolocation-coordinates';
import RestaurantResultsReducer from './reducers__restaurant-results';
import PhilippinesCitiesReducer from './reducers__philippines-cities';
import AppStateReducer from './reducers__app-state';

export default combineReducers({
    coordinates: GeolocationCoordinatesReducer,
    results: RestaurantResultsReducer,
    cities: PhilippinesCitiesReducer,
    app: AppStateReducer
});
