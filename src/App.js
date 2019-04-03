import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
// import { hot } from 'react-hot-loader/root'

import { BrowserRouter as Router } from 'react-router-dom'

import { Provider } from 'react-redux';

import { createStore } from 'redux';

import Root from 'containers/Root';
import reducer from 'reducers/reducer'

function configureStore() {
  const store = createStore(reducer);
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers/reducer', () => {
      const nextRootReducer = require('./reducers/reducer');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}

const store = configureStore();

const render = Component => 
  ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
          <Router>
              <Component/>
          </Router>
        </Provider>
    </AppContainer>
    , document.getElementById('app')
  );

render(Root);

if(module.hot){
  module.hot.accept('./containers/Root', () => {
    const NewRoot = require('./containers/Root').default;
    render(NewRoot);
  })
}
