import firebase from 'firebase';
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    DRAWER_OPEN,
    DRAWER_CLOSE,
    SELECT_IMAGE,
    INPUT_HANDLER,
    SAVED_INPUT,
    DATA_SAVER
} from './types';
import { Actions } from 'react-native-router-flux';
import data from '../reducers/LibraryList.json';
import { AsyncStorage } from 'react-native';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch((error) => {
                console.log(error);
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSuccess(dispatch, user))
                    .catch(() => loginUserFail(dispatch));
            });
    };
};

const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL })
}

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
    Actions.drawer();
}

export const selectLibrary = (libraryId) => {
    return (dispatch) => {
        dispatch({
            type: 'select_library',
            payload: libraryId
        });
        Actions.detail({ title: data[libraryId].title });
    }
};

export const goToMaps = () => {
    return (dispatch) => {
        dispatch({
            type: 'map_render'
        });
        // Actions.maps();
    };
};

export const openDrawer = (drawer) => {
    return {
        type: DRAWER_OPEN,
        payload: drawer
    };
};

export const closeDrawer = (drawer) => {
    return {
        type: DRAWER_CLOSE,
        payload: drawer
    };
};

export const selectImage = (uri) => {
    return (dispatch) => {
        dispatch({
            type: SELECT_IMAGE,
            payload: uri
        });
    };
}

export const inputHandler = (text) => {
    return {
        type: INPUT_HANDLER,
        payload: text
    };
}

export const checkSavedName = () => {
    return (dispatch) => {
        AsyncStorage.getItem('name').then(value => {
            dispatch({
                type: SAVED_INPUT,
                payload: value
            });
        })
    };
}

export const saveName = (text) => {
    return (dispatch) => {
        AsyncStorage.setItem('name', text).then(value => {
            dispatch({
                type: DATA_SAVER,
                payload: value
            });
        })
    }
}