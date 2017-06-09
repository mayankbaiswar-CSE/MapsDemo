import data from './LibraryList.json'

export default (state = null, action) => {
    switch (action.type) {
        case 'select_library':
            return data[action.payload];
        default:
            return state;
    }
};