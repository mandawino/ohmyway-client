import React from 'react';
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
        <Root
            value={store.getState()}
            onIncrement={() => {store.dispatch({type: 'INCREMENT'})}}
            onDecrement={() => {store.dispatch({type: 'DECREMENT'})}}
        />
    </AppContainer>, document.getElementById('app')
);

if (module.hot) {
    module.hot.accept('./containers/Root', () => {
        const RootContainer = require('containers/Root').default;
        // const renderr = () =>
        render(
            <AppContainer>
                <RootContainer
                    store={store.getState()}
                    onIncrement={() => store.dispatch({type: 'INCREMENT'})}
                    onDecrement={() => store.dispatch({type: 'DECREMENT'})}
                />
            </AppContainer>, document.getElementById('app')
        );
    });
}
renderr();
store.subscribe(renderr);
