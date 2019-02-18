import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';

import { BrowserRouter } from 'react-router-dom'
// import {useRouterHistory, hashHistory } from 'react-router';
// import { syncHistoryWithStore } from 'react-router-redux';
// import configureStore from 'store/configureStore';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import imagesReducer from 'reducers/Reducer'
// const store = configureStore();
// const appHistory = syncHistoryWithStore(hashHistory, store);

import Root from 'containers/Root';

render(
    <BrowserRouter>
        <AppContainer>
            <Provider store={createStore(imagesReducer)}>
                <Root/>
            </Provider>
        </AppContainer>
    </BrowserRouter>
    , document.getElementById('app')
);