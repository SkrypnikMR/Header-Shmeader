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
    const props = {
        history: [],
        location: { pathname: '/' },
    };
    it('Should match snapshot', () => {
        const component = shallowSmart(<HeaderControlPanel {...props} />);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render buttons', () => {
        const component = mountSmart(<HeaderControlPanel {...props} />);
        expect(component.find('button')).toHaveLength(3);
    });
    it('should call i18n.changeLanguage ', () => {
        const component = mountSmart(<HeaderControlPanel {...props} />);
        component.find('Button').first().simulate('click');
        expect(i18n.changeLanguage).toHaveBeenCalled();
    });
    it('should render all buttons in /chat', () => {
        const props = {
            history: [],
            location: { pathname: '/chat' },
        };
        const component = mountSmart(<HeaderControlPanel {...props} />);
        expect(component.find('button')).toHaveLength(4);
    });
    it('should render all buttons in /account', () => {
        const props = {
            history: [],
            location: { pathname: '/account' },
        };
        const component = mountSmart(<HeaderControlPanel {...props} />);
        expect(component.find('button')).toHaveLength(3);
    });
    it('should call history push', () => {
        const props = {
            history: { push: jest.fn() },
            location: { pathname: '/chat' },
        };
        const component = mountSmart(<HeaderControlPanel {...props} />);
        component.find('Button').at(3).getElement().props.onClick();
        expect(props.history.push).toHaveBeenCalledWith('/account');
    });
});
