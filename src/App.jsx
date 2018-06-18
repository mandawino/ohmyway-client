
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
// import { Provider } from 'react-redux';

import {render} from 'react-dom';
// import {useRouterHistory, hashHistory } from 'react-router';
import {AppContainer} from 'react-hot-loader';
// import { syncHistoryWithStore } from 'react-router-redux';

import Root from 'containers/Root';
// import configureStore from 'store/configureStore';
// import Footer from 'presenters/Footer/Footer';

// const store = configureStore();
// const appHistory = syncHistoryWithStore(hashHistory, store);

// import { createStore } from 'redux';
// import reducer from 'reducers/Reducer'
// const store = createStore(reducer);

import { BrowserRouter } from 'react-router-dom'
// import Contact from "presenters/Contact";


const renderr  = () => render(
    <BrowserRouter>
        <AppContainer>
            {/*<Provider store={store}>*/}
            <Root
                // store={store}
                //{...store.getState()}
                //  todos={store.getState().todos}
                //  visibilityFilter={store.getState().visibilityFilter}
            />
            {/*</Provider>*/}
        </AppContainer>
    </BrowserRouter>
    , document.getElementById('app')
);

if (module.hot) {
    module.hot.accept('./containers/Root', () => {
        const RootContainer = require('containers/Root').default;
        // const renderr = () =>
        render(
            <BrowserRouter>
                <AppContainer>
                    {/*<Provider store={store}>*/}
                        <RootContainer
                            // store = {store}
                            // store={store.getState()}
                            // todos={store.getState().todos}
                        />
                    {/*</Provider>*/}
                </AppContainer>, document.getElementById('app')
            </BrowserRouter>
        );
    });
}
renderr();
// store.subscribe(renderr);
