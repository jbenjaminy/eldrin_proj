import { MATCH_SUGGESTIONS } from '../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MATCH_SUGGESTIONS:
            return action.data;
        default:
            return state;
    }
};
