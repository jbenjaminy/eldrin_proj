import { combineReducers } from 'redux';

import GeolocationCoordinatesReducer from './reducers__geolocation_coordinates';
import RestaurantResultsReducer from './reducers__restaurant_results';
import PhilippinesCitiesReducer from './reducers__philippines_cities';
import SearchSuggestionsReducer from './reducers__search_suggestions';

export default combineReducers({
    coordinates: GeolocationCoordinatesReducer,
    results: RestaurantResultsReducer,
    cities: PhilippinesCitiesReducer,
    suggestions: SearchSuggestionsReducer
});
