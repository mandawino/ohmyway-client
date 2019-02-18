import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';

import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Root from 'containers/Root';
import reducer from 'reducers/Reducer'

render(
    <BrowserRouter>
        <AppContainer>
            <Provider store={createStore(reducer)}>
                <Root/>
            </Provider>
        </AppContainer>
    </BrowserRouter>
    , document.getElementById('app')
);