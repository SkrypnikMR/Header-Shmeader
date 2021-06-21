import React from 'react';
import { shallow } from 'enzyme';
import ChatDisplay from '../ChatDisplay';

describe('ChatDisplay', () => {
    it('Should match snapshot', () => {
        const component = shallow(<ChatDisplay />);
        expect(component.html).toMatchSnapshot();
    });
    it('Should render StChatDisplay', () => {
      const component = shallow(<ChatDisplay />);
      expect(component.find('styled__StChatDisplay')).toHaveLength(1);
    });
    it('Should render ChatMessages', () => {
      const component = shallow(<ChatDisplay />);
      expect(component.find('ChatMessages')).toHaveLength(1);
    });
});
