import {
    DRAWER_OPEN,
    DRAWER_CLOSE
} from '../actions/types';
const INITIAL_STATE = { open: false };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DRAWER_OPEN:
            return { ...state, open: action.payload };
        case DRAWER_CLOSE:
            return { ...state, open: action.payload };
        default:
            return state;
    }
}