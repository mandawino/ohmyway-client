import React, {Component, PropTypes} from 'react';

// import DevTools from 'containers/DevTools';

// class Root extends Component {
//     render() {
//         // const devTools = !window.devToolsExtension ? <DevTools /> : null
//         return (
//                 <div>
//                     <p>Hello dev</p>
//                     {/*{ devTools }*/}
//                 </div>
//         );
//     }
// }

class Root extends Component {

    render() {
        return <div>
            <h1>{this.props.store}</h1>
            <button onClick={this.props.onIncrement}>+</button>
            <button onClick={this.props.onDecrement}>-</button>
        </div>
    }
}

export default Root;
