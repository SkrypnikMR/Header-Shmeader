import React from 'react';
import { shallow } from 'enzyme';
import Registration from '../Registration.jsx';

describe('Registration', () => {
    let props;
    const sendRegistrationRequest = jest.fn();
    const setRegistrationValue = jest.fn();
    const fields = {
        email: '',
        password: '',
        confrim: '',
        firstName: '',
        lastName: '',
    };
    beforeEach(() => {
        props = {
            setRegistrationValue,
            sendRegistrationRequest,
            fields,
        };
    });
    it('Should match snapshot', () => {
        const component = shallow(<Registration {...props} />);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render p', () => {
        const component = shallow(<Registration {...props} />);
        expect(component.find('p')).toHaveLength(1);
    });
    it('should render inputs', () => {
        const component = shallow(<Registration {...props} />);
        expect(component.find('Input')).toHaveLength(5);
    });
    it('should render button', () => {
        const component = shallow(<Registration {...props} />);
        expect(component.find('Button')).toHaveLength(1);
    });
    it('should click on the button', () => {
        const component = shallow(<Registration {...props} />);
        component.find('Button').simulate('click');
        expect(sendRegistrationRequest).toHaveBeenCalledWith();
    });
    it('should click change input', () => {
        const component = shallow(<Registration {...props} />);
        component.find('Input').first().simulate('change', { name: 'email', value: 'emailValue' });
        expect(setRegistrationValue).toHaveBeenCalledWith({ name: 'email', value: 'emailValue' });
    });
});
