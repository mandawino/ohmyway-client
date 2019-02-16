/*
TODO : Add in pakage.json
dependencies :
 "react-redux": "^5.0.5",
 "redux": "^3.7.1"

devdependencies :
 "redux-devtools": "^3.4.0",
 "redux-devtools-dock-monitor": "^1.1.2",
 "redux-devtools-log-monitor": "^1.3.0",
 */

// Images reducer
 const imagesReducer = (state = {'country':''}, action) => {
     switch (action.type){
        case 'SET_IMAGES':
            return {...state, 'images': action.images}
        // case 'SET_COUNTRY':
            // return {...state, 'country': action.country}
        default:
            return state
     }
 }
 export default imagesReducer;