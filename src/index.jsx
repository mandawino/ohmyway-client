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

render(
    <AppContainer>
        <Root /> /* store={store} history={appHistory} */
    </AppContainer>, document.getElementById('app')
);

if (module.hot) {
    module.hot.accept('./containers/Root', () => {
        const RootContainer = require('containers/Root').default;
        render(
            <AppContainer>
                <RootContainer /> /* store={store} history={appHistory} */
            </AppContainer>, document.getElementById('app')
        );
    });
}