import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'

const Reducer = (state = {}, action) => {
    console.log('reducer', state, action)
    switch (action.type){
        case 'SET_IMAGES':
            return {...state, 'images': action.images}
        default:
            return state
    }
}

export default Reducer;
// export default (history) => combineReducers({
//     router: connectRouter(history),
//     Reducer
// });