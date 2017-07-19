import React, {Component} from 'react';
import PropTypes from 'prop-types';

// import DevTools from 'containers/DevTools';

let nextTodoId = 0;
class Root extends Component {

    // static propTypes = {
    //     value: PropTypes.number.isRequired,
    //     onIncrement: PropTypes.func.isRequired,
    //     onDecrement: PropTypes.func.isRequired
    // };

    render() {
        const { store } = this.props;
        return (
            <div>
                <input ref={node => {this.input = node}}/>
                <button onClick={ () => {
                    this.props.store.dispatch(
                        {type: 'ADD_TODO', text: this.input.value, id: nextTodoId++, completed: false});
                    this.input.value = '';
                }}>
                    Add todo
                </button>
                <ul>
                    {this.props.todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
                </ul>
            </div>
        );
        // const { value, onIncrement, onDecrement } = this.props;
        // // const devTools = !window.devToolsExtension ? <DevTools /> : null;
        // return (
        // <div>
        //     <h1>{value}</h1>
        //     <button onClick={onIncrement}>+</button>
        //     <button onClick={onDecrement }>-</button>
        // </div>

        // { devTools }
        // )
    }
}

export default Root;
