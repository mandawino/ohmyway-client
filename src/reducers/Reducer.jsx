const Reducer = (state = 0, action) => {
    if(state == undefined){
        console.log('undefined')
        state=0;
    }
    console.log(state, action);
    if(action.type === 'INCREMENT'){
        console.log('INCREMENT')
        return state+1;
    } else if (action.type === 'DECREMENT') {
        console.log('DECREMENT')
        return state-1;
    } else {
        return state;
    }
};

export default Reducer;