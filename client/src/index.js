import '../public/styles/styles.scss';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import rootReducer from './Store';
import App from './components/App';
import rootSaga from './Store/saga';
import './i18n';

/* const devTools = window?.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(); devTools, */
const saga = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(saga),
  ),
);
saga.run(rootSaga);

render(
  <Provider store={store}>
    <App />
  </Provider >,
  document.getElementById('root'),
);
