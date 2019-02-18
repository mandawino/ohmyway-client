const Reducer = (state = {'country':''}, action) => {
    switch (action.type){
        case 'SET_IMAGES':
            return {...state, 'images': action.images}
        default:
            return state
    }
}
export default Reducer;