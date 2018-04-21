import { FETCH_LOCATION } from '../actions/types';

const INITIAL_STATE = {
    coords: {
        latitude: 0,
        longitude: 0
    }
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_LOCATION:
            return action.data;
        default:
            return state;
    }
};
