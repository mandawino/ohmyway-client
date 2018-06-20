import React, { Component } from 'react';
import Stream from './Stream';
import Contact from '../presenters/Contact';
import {Switch, Route} from 'react-router-dom';


class Main extends Component {
    render() {
        return <div className="main">
            {/*Main*/}
            <Switch>
                <Route exact path="/contact" component={Contact}/>
                <Route path='/:country?' component={Stream}/>
            </Switch>
        </div>

    }
}

export default Main;