import React from 'react';
import { shallowSmart, mountSmart } from '/src/helpers/testHelper';
import HeaderControlPanel from '../HeaderControlPanel';
import '/src/i18n';

describe('App', () => {
    it('Should match snapshot', () => {
        const component = shallowSmart(<HeaderControlPanel />);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render inputs', () => {
        const component = mountSmart(<HeaderControlPanel />);
        expect(component.find('button')).toHaveLength(3);
    });
});
