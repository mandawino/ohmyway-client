import React, { Component } from 'react';
import Stream from './Stream';
import Contact from '../presenters/Contact';
import {Route, Switch} from 'react-router-dom';


const Main = () => { 
    return <div className="main">
            <Switch>
                <Route exact path="/contact" component={Contact}/>
                <Route path='/:country?' component={Stream}/>
            </Switch>
    </div>
}

export default Main;