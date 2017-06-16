import {
    SELECT_IMAGE
} from '../actions/types';
const INITIAL_STATE = { uri: '', success: false };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECT_IMAGE:
            return { ...state, uri: action.payload, success: true };
        default:
            return state;
    }
}