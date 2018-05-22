import { FETCH_LOCATION_SUCCESS, RESET_APP_STATE } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_LOCATION_SUCCESS:
            return action.data;
        case RESET_APP_STATE:
            return INITIAL_STATE;
        default:
            return state;
    }
};
