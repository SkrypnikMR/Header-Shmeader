import React from 'react';
import { shallow } from 'enzyme';
import ChatContent from '../ChatContent';

describe('ChatContent', () => {
    it('Should match snapshot', () => {
        const component = shallow(<ChatContent />);
        expect(component.html).toMatchSnapshot();
    });
    it('Should render StChatContant', () => {
      const component = shallow(<ChatContent />);
      expect(component.find('styled__StChatContant')).toHaveLength(1);
    });
    it('Should render ChatTitle', () => {
      const component = shallow(<ChatContent />);
      expect(component.find('ChatTitle')).toHaveLength(1);
    });
    it('Should render ChatDisplay', () => {
      const component = shallow(<ChatContent />);
      expect(component.find('ChatDisplay')).toHaveLength(1);
    });
    it('Should render ChatControlPanel', () => {
      const component = shallow(<ChatContent />);
      expect(component.find('ChatControlPanel')).toHaveLength(1);
    });
});
