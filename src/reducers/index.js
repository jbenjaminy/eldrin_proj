import { combineReducers } from 'redux';

import GeolocationCoordinatesReducer from './reducers__geolocation-coordinates';
import RestaurantResultsReducer from './reducers__restaurant-results';
import SearchSuggestionsReducer from './reducers__search-suggestions';
import AppStateReducer from './reducers__app-state';
import ImageUrlsReducer from './reducers__image-urls';

export default combineReducers({
    coordinates: GeolocationCoordinatesReducer,
    results: RestaurantResultsReducer,
    locationSuggestions: SearchSuggestionsReducer,
    app: AppStateReducer,
    urls: ImageUrlsReducer
});
