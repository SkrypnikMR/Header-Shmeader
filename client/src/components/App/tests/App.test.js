import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
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
        const component = shallow(<Provider store={store}><App /></Provider>);
        expect(component.html()).toMatchSnapshot();
    });
});
