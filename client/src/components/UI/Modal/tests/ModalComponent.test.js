import React from 'react';
import { shallow } from 'enzyme';
import ModalComponent from '../ModalComponent';
import { shallowSmart, mountSmart } from '/src/helpers/testHelper';

describe('ChatControlPanel', () => {
  let props;
  const isOpen = true;
  const onChangeIsOpen = jest.fn();
  const headerTextKey = ' ';
  const currentModalType = ' ';
  const content = <element/>;
  const fontSize = ' ';
  const Component = ' ';
  beforeEach(() => {
    props = {
        isOpen, 
        onChangeIsOpen, 
        headerTextKey, 
        currentModalType,
        content,
        fontSize,
        Component,
    };
  });
  it('Should match snapshot', () => {
    const component = shallowSmart(<ModalComponent />);
    expect(component.html).toMatchSnapshot();
  });
  it('should render button', () => {
    const component = mountSmart(<ModalComponent {...props} />);
    expect(component.find('Button')).toHaveLength(1);
  });
  it('should click on the button', () => {
    const component = mountSmart(<ModalComponent {...props} />);
    component.find('Button').simulate('click');
    expect(onChangeIsOpen).toHaveBeenCalled();
  });
  it('Should render StBackground', () => {
    const component = shallow(<ModalComponent />);
    expect(component.find('styled__StBackground')).toHaveLength(1);
  });
});
