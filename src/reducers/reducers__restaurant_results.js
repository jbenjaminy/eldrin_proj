import { FETCH_RESTAURANTS } from '../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_RESTAURANTS:
            return action.data;
        default:
            return state;
    }
};
