import {combineReducers} from 'redux'

const todo = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed : false
            };
        case 'TOGGLE_TODO':
            // if(state.id !== action.id){
            //     return state
            // }
            // return {
            //     ...state,
            //     completed: !state.completed
            // };
            return (state.id === action.id)
                    ? {...state, completed: !state.completed}
                    : state;
        default:
            return state;
    }
};

const todos = (state = [], action) => {
    console.log("todo state : ", state);
    console.log("todo action : ", action);

    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'TOGGLE_TODO':
            return state.map(t => todo(t, action));
        default:
            return state;
    }
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    console.log("filterR state : ", state);
    console.log("filterR action : ", action);
    switch(action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};



const Reducer = combineReducers({
    todos, //todos: todos,
    visibilityFilter //visibilityFilter: visibilityFilter
});

// const Reducer = (state={}, action) => {
//     return {
//         todos: todos(state.todos, action),
//         visibilityFilter: visibilityFilter(state.visibilityFilter, actions)
//     }
// };

export default Reducer;