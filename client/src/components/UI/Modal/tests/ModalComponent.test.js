import React from 'react';
import { shallow } from 'enzyme';
import ModalComponent from '../ModalComponent';
import { shallowSmart } from '/src/helpers/testHelper';
import Component from '../ModalTestComponent.jsx';

jest.mock('react-modal');

describe('ModalComponent', () => {
  let props;
  beforeEach(() => {
    props = {
        isOpen: true, 
        onChangeIsOpen: jest.fn(), 
        headerTextKey: ' ', 
        currentModalType: 'notificationSettings',
        fontSize: ' ',
        Component: <Component currentModalType='notificationSettings'/>,
    };
  });
  it('without component', () => {
    const component = shallow(<ModalComponent />);
    expect(component).toMatchSnapshot();
  });
  it('Should match snapshot', () => {
    const component = shallowSmart(<ModalComponent {...props}/>);
    expect(component.html).toMatchSnapshot();
  });
  it('check prop value', () => {
    props = {
        isOpen: true, 
        onChangeIsOpen: jest.fn(), 
        headerTextKey: ' ', 
        currentModalType: 'notificationSettings',
        fontSize: ' ',
        Component: <Component currentModalType='notificationSettings'/>,
    };
    const component = shallow(<ModalComponent {...props} />).find('Modal');
    expect(component.props().isOpen).toEqual(true);
  });
  it('should render button', () => {
    props = {
        isOpen: true, 
        onChangeIsOpen: jest.fn(), 
        headerTextKey: ' ', 
        currentModalType: 'notificationSettings',
        fontSize: ' ',
        Component: <Component currentModalType='LogOut'/>,
    };
    const component = shallow(<ModalComponent {...props} />).find('Modal');
    expect(component.find('Button')).toHaveLength(1);
  });
  it('should click on the button', () => {
    props = {
        isOpen: true, 
        onChangeIsOpen: jest.fn(), 
        headerTextKey: ' ', 
        currentModalType: 'notificationSettings',
        fontSize: ' ',
        Component: <Component currentModalType='LogOut'/>,
    };
    const component = shallow(<ModalComponent {...props} />).find('Modal');
    component.find('Button').simulate('click');
    expect(props.onChangeIsOpen).toHaveBeenCalledWith({ currentModalType: 'notificationSettings', data: {}, isOpen: false });
  });
});
