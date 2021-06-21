import React from 'react';
import { shallowSmart, mountSmart } from '/src/helpers/testHelper';
import Header from '../Header';

describe('Header', () => {
    it('Should match snapshot', () => {
        const component = shallowSmart(<Header />);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render p', () => {
        const component = mountSmart(<Header />);
        expect(component.find('Logo')).toHaveLength(1);
    });
    it('should render inputs', () => {
        const component = mountSmart(<Header />);
        expect(component.find('HeaderControlPanel')).toHaveLength(1);
    });
});
