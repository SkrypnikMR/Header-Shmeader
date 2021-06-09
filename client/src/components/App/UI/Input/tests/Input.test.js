import React from 'react';
import { shallow } from 'enzyme';
import Input from '../Input'

describe('Input', () => {
  it('Should match snapshot', () => {
      const component = shallow(<Input />)
      expect(component.html()).toMatchSnapshot()
  })
})