const reducer = (state = {}, action) => {
    switch (action.type){
        case 'SET_IMAGES':
            return {...state, 'images': action.images}
        default:
            return state
    }
}

export default reducer;