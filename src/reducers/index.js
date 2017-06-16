import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';
import MapReducer from './MapReducer';
import DrawerReducer from './DrawerReducer';
import FilePickerReducer from './FilePickerReducer';
import InputReducer from './InputReducer';

export default combineReducers({
    auth: AuthReducer,
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer,
    map: MapReducer,
    drawer: DrawerReducer,
    uri: FilePickerReducer,
    input: InputReducer
});