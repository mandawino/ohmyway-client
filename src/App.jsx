import React from 'react';
import { Provider } from 'react-redux';

import {render} from 'react-dom';
// import {useRouterHistory, hashHistory } from 'react-router';
import {AppContainer} from 'react-hot-loader';
// import { syncHistoryWithStore } from 'react-router-redux';

import Root from 'containers/Root';
// import configureStore from 'store/configureStore';
// import Footer from 'components/Footer/Footer';

// const store = configureStore();
// const appHistory = syncHistoryWithStore(hashHistory, store);

import { createStore } from 'redux';
import reducer from 'reducers/Reducer'
const store = createStore(reducer);

const renderr  = () => render(
    <AppContainer>
        <Provider store={store}>
        <Root
            // store={store}
            //{...store.getState()}
            //  todos={store.getState().todos}
            //  visibilityFilter={store.getState().visibilityFilter}
        />
        </Provider>
    </AppContainer>, document.getElementById('app')
);

if (module.hot) {
    module.hot.accept('./containers/Root', () => {
        const RootContainer = require('containers/Root').default;
        // const renderr = () =>
        render(
            <AppContainer>
                <Provider store={store}>
                    <RootContainer
                        // store = {store}
                        // store={store.getState()}
                        // todos={store.getState().todos}
                    />
                </Provider>
            </AppContainer>, document.getElementById('app')
        );
    });
}
renderr();
store.subscribe(renderr);
