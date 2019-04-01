import React, {Component} from 'react';
import Header from "./Header";
import Main from "./Main";

// import DevTools from 'containers/DevTools';

class Root extends Component {
    render(){
        return (
            <div className="wrapper">
                <Header/>
                <Main/>
            </div>
        );
    }
}

export default Root;
