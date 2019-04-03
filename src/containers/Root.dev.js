import React, {Component} from 'react';
import Menu from "../presenters/Menu";
import Main from "./Main";

// import DevTools from 'containers/DevTools';

class Root extends Component {
    render(){
        return (
            <div className="wrapper">
                <Menu/>
                <Main/>
            </div>
        );
    }
}

export default Root;
