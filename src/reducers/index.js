import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';
import MapReducer from './MapReducer';

export default combineReducers({
    auth: AuthReducer,
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer,
    map: MapReducer
});