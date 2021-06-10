// import '../public/styles/styles.scss';
// import React from 'react';
// import { render } from 'react-dom';
// import App from './components/App';

// render(
//     <App />,
//     document.getElementById('root'),
// );

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import App from './components/App';
import reducers from './redux/rootReducer';

const store = createStore(reducers, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()));

render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
