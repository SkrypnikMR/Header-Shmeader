import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import createSagaMiddleware from '@redux-saga/core';
import { createStore, applyMiddleware, compose } from 'redux';
import App from '../App';
import rootReducer from '../../../Store';
import { watcherRegistration } from '../../../Store/registration/sagas';

const saga = createSagaMiddleware();

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(saga),
    ),
);
saga.run(watcherRegistration);

describe('App', () => {
    it('Should match snapshot', () => {
        const component = shallow(<Provider store={store}><App /></Provider>);
        expect(component.html()).toMatchSnapshot();
    });
});
