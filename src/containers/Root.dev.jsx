import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import {connect} from 'react-redux';

// import Stream from './Stream';

// import { toggleTodo, addTodo } from '../actions/Actions'
import Header from "./Header";
import Menu from "./Menu";
import Main from "./Main";

// import DevTools from 'containers/DevTools';

class Root extends Component {
    render(){
        const {store} = this.props;
        return (

            <div className="wrapper"> {/*fluid={true}*/}
                {/*<Header/>*/}
                {/* <Menu store={store}/> */}
                <Main store={store}/>
            </div>
        );
    }
}

export default Root;
