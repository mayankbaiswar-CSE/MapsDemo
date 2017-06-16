import {
    INPUT_HANDLER,
    SAVED_INPUT,
    DATA_SAVER
} from '../actions/types';

const INITIAL_STATE = '';

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INPUT_HANDLER:
            return String(action.payload);
        case SAVED_INPUT:
            if (action.payload == null) { return ''; }
            else { return String(action.payload); }
        case DATA_SAVER:
            console.log('saved input: ', action.payload);
        default:
            return state;
    }
}