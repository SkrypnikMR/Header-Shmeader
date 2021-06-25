import React from 'react';
import { shallowSmart, mountSmart } from '/src/helpers/testHelper';
import { useTranslation } from 'react-i18next';
import HeaderControlPanel from '../HeaderControlPanel';

jest.mock('react-i18next', () => ({
    useTranslation: jest.fn()
        .mockReturnValue({ i18n: { changeLanguage: jest.fn() }, t: jest.fn() }),
}));

describe('HeaderControlPanel', () => {
    let props;
    beforeEach(() => {
        props = {
            setValue: jest.fn(),
            themeMode: '',
      };
    });
    const { i18n } = useTranslation();
    const props = {
        history: [],
        location: { pathname: '/' },
    };
    it('Should match snapshot', () => {         
        const component = shallowSmart(<HeaderControlPanel {...props}/>);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render buttons', () => {
        const component = mountSmart(<HeaderControlPanel {...props}/>);
        expect(component.find('button')).toHaveLength(5);
    });
    it('should call i18n.changeLanguage ', () => {
        const component = mountSmart(<HeaderControlPanel {...props}/>);
        component.find('Button').at(1).getElement().props.onClick({ target: { value: 'dark' } });
        expect(i18n.changeLanguage).toHaveBeenCalled();
    });
    it('should call button for change theme, themeMode===dark', () => {
        props = {
            setValue: jest.fn(),
            themeMode: 'dark',
        };
      const component = mountSmart(<HeaderControlPanel {...props}/>);
      component.find('Button').at(0).getElement().props.onClick();
      expect(props.setValue).toHaveBeenCalledWith({ name: 'themeMode', value: 'light' });
    });
    it('should call button for change theme, themeMode===light', () => {
        props = {
            setValue: jest.fn(),
            themeMode: 'light',
        };
        const component = mountSmart(<HeaderControlPanel {...props}/>);
        component.find('Button').at(0).getElement().props.onClick();
        expect(props.setValue).toHaveBeenCalledWith({ name: 'themeMode', value: 'dark' });
    });
    it('should render all buttons in /chat', () => {
        const props = {
            history: [],
            location: { pathname: '/chat' },
            setValue: jest.fn(),
            themeMode: 'light',
        };
        const component = mountSmart(<HeaderControlPanel {...props} />);
        expect(component.find('button')).toHaveLength(5);
    });
    it('should render all buttons in /account', () => {
        const props = {
            history: [],
            location: { pathname: '/account' },
            setValue: jest.fn(),
            themeMode: 'light',
        };
        const component = mountSmart(<HeaderControlPanel {...props} />);
        expect(component.find('button')).toHaveLength(4);
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
