import React from 'react';
import { shallow } from 'enzyme';
import Chat from '../Chat';

describe('Chat', () => {
    it('Should match snapshot', () => {
        const component = shallow(<Chat />);
        expect(component.html).toMatchSnapshot();
    });
    it('Should render StChat', () => {
      const component = shallow(<Chat />);
      expect(component.find('styled__StChat')).toHaveLength(1);
    });
    it('Should render ChatList', () => {
      const component = shallow(<Chat />);
      expect(component.find('ChatList')).toHaveLength(1);
    });
    it('Should render ChatContent', () => {
      const component = shallow(<Chat />);
      expect(component.find('ChatContent')).toHaveLength(1);
    });
});
