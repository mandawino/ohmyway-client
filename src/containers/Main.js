import React, { Component } from 'react';
import Stream from './Stream';
import Contact from '../presenters/Contact';
import {Switch, Route} from 'react-router-dom';


class Main extends Component {
    render() {
        return <div className="main">
            {/*Main*/}
            <Switch>
                <Route exact path='/' component={Stream}/>
                <Route path='/stream' component={Stream}/>
                <Route path="/contact" component={Contact}/>
            </Switch>
        </div>

    }
}

export default Main;