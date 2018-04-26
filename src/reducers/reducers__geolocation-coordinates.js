import { FETCH_LOCATION_SUCCESS } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_LOCATION_SUCCESS:
            return action.data;
        default:
            return state;
    }
};
