import { MATCH_SUGGESTIONS, UPDATE_INPUT } from '../actions/types';

const INITIAL_STATE = {
    suggestions: [],
    input: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MATCH_SUGGESTIONS:
            return { ...state, suggestions: action.data };
        case UPDATE_INPUT:
            return { ...state, input: action.data };
        default:
            return state;
    }
};
