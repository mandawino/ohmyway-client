const Reducer = (state = 0, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return state+1;
        case 'DECREMENT':
            return state-1;
        default:
            return state
    }



    // if(action.type === 'INCREMENT'){
    //     console.log('INCREMENT')
    //     return state+1;
    // } else if (action.type === 'DECREMENT') {
    //     console.log('DECREMENT')
    //     return state-1;
    // } else {
    //     return state;
    // }
};

export default Reducer;