import { FETCH_RESTAURANTS_SUCCESS } from '../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_RESTAURANTS_SUCCESS:
            return action.data;
        default:
            return state;
    }
};
