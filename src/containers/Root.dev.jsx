import React, {Component, PropTypes} from 'react';
import DevTools from 'containers/DevTools';


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

    static propTypes = {
        value: PropTypes.number.isRequired,
        onIncrement: PropTypes.func.isRequired,
        onDecrement: PropTypes.func.isRequired
    };

    render() {
        const { value, onIncrement, onDecrement } = this.props;
        const devTools = !window.devToolsExtension ? <DevTools /> : null;
        return (
        <div>
            <h1>{value}</h1>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement }>-</button>
        </div>
        // { devTools }
        )
    }
}

export default Root;
