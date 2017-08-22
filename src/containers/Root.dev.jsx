import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// import DevTools from 'containers/DevTools';

let nextTodoId = 0;

class FilterLink extends Component {
    render(){
        if(this.props.filter === this.props.currentFilter){
            return <span>{this.props.children}</span>
        }
        return (
            <a href="#"
            onClick={e => {
                e.preventDefault();
                console.log("filter : ", this.props.filter)
                this.props.store.dispatch({
                    type: 'SET_VISIBILITY_FILTER',
                    filter: this.props.filter
                })
            }}>{this.props.children}</a>
        )
    }
}

const getVisibleTodos = (todos, filter) => {
    switch(filter){
        case 'SHOW_ALL': return todos;
        case 'SHOW_ACTIVE': return todos.filter(t => !t.completed)
        case 'SHOW_COMPLETED': return todos.filter(t => t.completed)
        default: return todos;
    }
};

class Root extends Component {

    // static propTypes = {
    //     value: PropTypes.number.isRequired,
    //     onIncrement: PropTypes.func.isRequired,
    //     onDecrement: PropTypes.func.isRequired
    // };

    render() {
        const { store } = this.props;
        let visibleTodos = getVisibleTodos(this.props.todos, this.props.visibilityFilter);
        console.log("VT ", visibleTodos);
        return (
            <div>
                <input ref={node => {this.input = node}}/>
                <button onClick={ () => {
                    // if(this.input.value) {
                        this.props.store.dispatch(
                            {type: 'ADD_TODO', text: this.input.value, id: nextTodoId++, completed: false});
                    // }
                    this.input.value = '';
                }}>
                    Add todo
                </button>
                <ul>
                    {visibleTodos.map(todo =>
                        <li key={todo.id} onClick={() =>
                        {
                            console.log(todo.id);
                            this.props.store.dispatch({type: 'TOGGLE_TODO', id:todo.id});
                        }} style={{
                            textDecoration: todo.completed ? 'line-through': 'none'
                        }}>
                            {todo.text}
                        </li>)}
                </ul>
                <p>
                    Show:
                    {' '}
                    <FilterLink filter='SHOW_ALL' store={this.props.store} currentFilter={this.props.visibilityFilter}>Show All</FilterLink>
                    {' '}
                    <FilterLink filter='SHOW_ACTIVE' store={this.props.store} currentFilter={this.props.visibilityFilter}>Show Active</FilterLink>
                    {' '}
                    <FilterLink filter='SHOW_COMPLETED' store={this.props.store} currentFilter={this.props.visibilityFilter}>Show Completed</FilterLink>
                </p>
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

export default connect()(Root);
