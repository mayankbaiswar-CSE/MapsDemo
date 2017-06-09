const INITIAL_STATE = { lat: '', long: '' };
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'map_render':
            return { ...state, lat: '', long: '' };
        default:
            return state;
    }
};