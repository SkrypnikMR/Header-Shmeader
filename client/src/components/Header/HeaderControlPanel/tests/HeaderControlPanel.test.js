import React from 'react';
import { shallowSmart, mountSmart } from '/src/helpers/testHelper';
import { useTranslation } from 'react-i18next';
import HeaderControlPanel from '../HeaderControlPanel';

jest.mock('react-i18next', () => ({
    useTranslation: jest.fn()
        .mockReturnValue({ i18n: { changeLanguage: jest.fn() }, t: jest.fn() }),
}));

describe('HeaderControlPanel', () => {
    const { i18n } = useTranslation();
    it('Should match snapshot', () => {
        const component = shallowSmart(<HeaderControlPanel />);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render inputs', () => {
        const component = mountSmart(<HeaderControlPanel />);
        expect(component.find('button')).toHaveLength(3);
    });
    it('should call i18n.changeLanguage ', () => {
        const component = mountSmart(<HeaderControlPanel />);
        component.find('Button').first().simulate('click');
        expect(i18n.changeLanguage).toHaveBeenCalled();
    });
});
