import '../public/styles/styles.scss';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Store';
import App from './components/App';

const devTools = window?.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        devTools,
    ),
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
