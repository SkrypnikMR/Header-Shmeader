import React from 'react';
import { shallow, mount } from 'enzyme';
import Input from '../Input'

// jest.mock('../../ToDo', ()=>()=><div id="ToDo"></div>)
describe('Input', () => {
  it('Should match snapshot', () => {
      const component = shallow(<Input />)
      expect(component.html()).toMatchSnapshot()
  })
  // it('Should have Button ', () => {
  //     const component = mount(<Button />)
  //     expect(component.find('button')).toHaveLength(1)
  // })
  // it('Should call function from props on click on the button', () => {
  //     const btnOnClick = jest.fn();
  //     const title = 'testTitle';
  //     const component = mount(<Button onButtonClick={btnOnClick} title={title} />)
  //     component.simulate('click');
  //     expect(btnOnClick).toHaveBeenCalled();
  //     expect(component.html()).toBe(`<button>${title}</button>`);
  // })
})