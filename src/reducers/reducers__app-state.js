import {
    MATCH_SUGGESTIONS,
    UPDATE_INPUT,
    UPDATE_LOCATION,
    RESET_APP_STATE
} from '../actions/types';

const INITIAL_STATE = {
    suggestions: [],
    input: '',
    location: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MATCH_SUGGESTIONS:
            return { ...state, suggestions: action.data };
        case UPDATE_INPUT:
            return { ...state, input: action.data };
        case UPDATE_LOCATION:
            return { ...state, location: action.data };
        case RESET_APP_STATE:
            return INITIAL_STATE;
        default:
            return state;
    }
};
