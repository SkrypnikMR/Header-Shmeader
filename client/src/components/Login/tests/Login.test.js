import React from 'react';
import { shallow } from 'enzyme';
import Login from '../Login.jsx';

describe('Login', () => {
    let props;
    const sendLoginRequest = jest.fn();
    const setLoginValue = jest.fn();
    const fields = {
        email: '',
        password: '',
    };
    beforeEach(() => {
        props = {
            setLoginValue,
            sendLoginRequest,
            fields,
        };
    });
    it('Should match snapshot', () => {
        const component = shallow(<Login {...props} />);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render p', () => {
        const component = shallow(<Login {...props} />);
        expect(component.find('p')).toHaveLength(1);
    });
    it('should render inputs', () => {
        const component = shallow(<Login {...props} />);
        expect(component.find('Input')).toHaveLength(2);
    });
    it('should render button', () => {
        const component = shallow(<Login {...props} />);
        expect(component.find('Button')).toHaveLength(1);
    });
    it('should click on the button', () => {
        const component = shallow(<Login {...props} />);
        component.find('Button').simulate('click');
        expect(sendLoginRequest).toHaveBeenCalledWith();
    });
    it('should click change input', () => {
        const component = shallow(<Login {...props} />);
        component.find('Input').first().simulate('change', { name: 'email', value: 'emailValue' });
        expect(setLoginValue).toHaveBeenCalledWith({ name: 'email', value: 'emailValue' });
    });
});