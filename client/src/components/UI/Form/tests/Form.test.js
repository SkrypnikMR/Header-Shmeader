import React from 'react';
import { shallow } from 'enzyme';
import Form from '../Form.jsx';
import Button from '/src/components/Button';

describe('Form', () => {
    let props;
    beforeEach(() => {
        props = {
            children: [<Button id={1} onClick={jest.fn()} />],
        };
    });
    it('Should match snapshot', () => {
        const component = shallow(<Form {...props} />);
        expect(component.html()).toMatchSnapshot();
    });
    it('should render StFormDiv', () => {
        const component = shallow(<Form {...props} />);
        expect(component.find('styled__StFormDiv')).toHaveLength(1);
    });
});
