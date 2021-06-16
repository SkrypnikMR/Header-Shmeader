import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

export const shallowSmart = (component, store) => {
    const core = store
        ? <Provider store={store}>{component}</Provider>
        : component;
    const test = <Router>{core}</Router>;
    return shallow(test);
};
