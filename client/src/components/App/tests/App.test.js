import React from 'react';
import configureStore from 'redux-mock-store';
import { shallowSmart } from '/src/helpers/testHelper';
import App from '../App';
import '/src/i18n';

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
  user: {
    themeMode: 'light',
  },
});
const props = {
  userTheme: {
    light: 'lightBackground',
    dark: 'darkBackground',
  },
  userThemeMode: 'dark',
};

describe('App', () => {
  it('Should match snapshot', () => {
    const component = shallowSmart(<App {...props} />, store);
    expect(component.html()).toMatchSnapshot();
  });
});
