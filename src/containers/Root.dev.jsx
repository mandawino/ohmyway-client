import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import {connect} from 'react-redux';

// import Stream from './Stream';

// import { toggleTodo, addTodo } from '../actions/Actions'
import Header from "./Header";
import Menu from "./Menu";
import Main from "./Main";

// import DevTools from 'containers/DevTools';

// render() {
//     const {store, history} = this.props;
//     const devTools = !window.devToolsExtension ? <DevTools /> : null
//     return (
//         <Provider store={store}>
//             <div>
//                 <Router routes={routes} history={history} />
//                 { devTools }
//             </div>
//         </Provider>
//     );
// }

// class FilterLink extends Component {
//     render(){
//         if(this.props.filter === this.props.currentFilter){
//             return <span>{this.props.children}</span>
//         }
//         return (
//             <a href="#"
//             onClick={e => {
//                 e.preventDefault();
//                 console.log("filter : ", this.props.filter)
//                 this.props.store.dispatch({
//                     type: 'SET_VISIBILITY_FILTER',
//                     filter: this.props.filter
//                 })
//             }}>{this.props.children}</a>
//         )
//     }
// }
//
// const getVisibleTodos = (todos, filter) => {
//     switch(filter){
//         case 'SHOW_ALL': return todos;
//         case 'SHOW_ACTIVE': return todos.filter(t => !t.completed)
//         case 'SHOW_COMPLETED': return todos.filter(t => t.completed)
//         default: return todos;
//     }
// };

class Root extends Component {
    render(){
        return (
            <div className="wrapper"> {/*fluid={true}*/}
                {/*<Header/>*/}
                <Menu/>
                <Main/>
            </div>
        );
    }



    // static propTypes = {
    //     value: PropTypes.number.isRequired,
    //     onIncrement: PropTypes.func.isRequired,
    //     onDecrement: PropTypes.func.isRequired
    // };

    // render() {
    //     // const { store } = this.props;
    //     console.log("todoss", this.props.todos)
    //
    //     return (
    //         <div>
    //             <input ref={node => {this.input = node}}/>
    //             <button onClick={ () => {
    //                 this.props.addTodo(this.input.value)
    //                 this.input.value = '';
    //             }}>
    //                 Add todo
    //             </button>
    //             <ul>
    //                 {
    //                     this.props.todos.map(todo =>
    //                     <li key={todo.id} onClick={() =>
    //                     {
    //                         this.props.toggleTodo(todo.id)
    //                     }} style={{
    //                         textDecoration: todo.completed ? 'line-through': 'none'
    //                     }}>
    //                         {todo.text}
    //                     </li>)}
    //             </ul>
    //             <p>
    //                 Show:
    //                 {' '}
    //                 <FilterLink filter='SHOW_ALL'>Show All</FilterLink>
    //                 {' '}
    //                 <FilterLink filter='SHOW_ACTIVE' >Show Active</FilterLink>
    //                 {' '}
    //                 <FilterLink filter='SHOW_COMPLETED' >Show Completed</FilterLink>
    //             </p>
    //         </div>
    //     );
    //     // const { value, onIncrement, onDecrement } = this.props;
    //     // // const devTools = !window.devToolsExtension ? <DevTools /> : null;
    //     // return (
    //     // <div>
    //     //     <h1>{value}</h1>
    //     //     <button onClick={onIncrement}>+</button>
    //     //     <button onClick={onDecrement }>-</button>
    //     // </div>
    //
    //     // { devTools }
    //     // )
    // }
}

// const mapStateToProps = (state) => ({
//     todos: getVisibleTodos(state.todos, state.visibilityFilter)
// });
//
// const mapDispatchToProps = {
//     toggleTodo: toggleTodo,
//     addTodo: addTodo
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(Root);


export default Root;
