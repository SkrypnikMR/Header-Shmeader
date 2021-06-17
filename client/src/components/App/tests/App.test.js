import React from 'react';
import configureStore from 'redux-mock-store';
import { shallowSmart } from '../../../helpers/testHelper';
import App from '../App';

const mockStore = configureStore();
const store = mockStore({
    registration: {
        email: '',
        password: '',
        confirm: '',
        firstName: '',
        lastName: '',
        success: null,
    },
    login: {
        email: '',
        password: '',
        confirm: '',
        firstName: '',
        lastName: '',
        success: null,
    },
});

describe('App', () => {
    it('Should match snapshot', () => {
        const component = shallowSmart(<App />, store);
        expect(component.html()).toMatchSnapshot();
    });
});
