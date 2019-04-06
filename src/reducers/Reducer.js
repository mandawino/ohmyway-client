import { combineReducers } from 'redux';

const defaultImagesState = {
    data: null,
    loading: false,
    error: null
}
const images = (state = defaultImagesState, action) => {
    switch(action.type){
        case 'GET_IMAGES_STARTED':
            return {...state, loading: true}
        case 'GET_IMAGES_SUCCESS':
            const { images } = action;
            return {...state, data: images}
        case 'GET_IMAGES_FAILURE':
            const { error } = action;
            return {...state, error: error}
        case 'GET_IMAGES_ENDED':
            return {...state, loading: false}
        default:
            return state
    }
}

const reducer = combineReducers({
    images
    // , TODO Add another reducer
});

export default reducer;