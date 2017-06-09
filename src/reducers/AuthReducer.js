import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from '../actions/types';
const INITIAL_STATE = { email: '', password: '', user: null, error: '', loading: false, title: '', success: false };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER_SUCCESS:
            console.log(action.payload);
            return { ...state, user: action.payload, error: '', loading: false, title: 'Places', success: true };
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication Failed.', password: '', loading: false, success: false };
        case LOGIN_USER:
            return { ...state, loading: true, error: '' };
        default:
            return state;
    }
}