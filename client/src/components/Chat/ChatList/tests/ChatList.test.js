import React from 'react';
import { shallow } from 'enzyme';
import ChatList from '../ChatList';

describe('ChatList', () => {
    it('Should match snapshot', () => {
        const component = shallow(<ChatList />);
        expect(component.html).toMatchSnapshot();
    });
    it('Should render StChatList', () => {
      const component = shallow(<ChatList />);
      expect(component.find('styled__StChatList')).toHaveLength(1);
    });
    it('Should render Search', () => {
      const component = shallow(<ChatList />);
      expect(component.find('Search')).toHaveLength(1);
    });
    it('Should render ChatListItems', () => {
      const component = shallow(<ChatList />);
      expect(component.find('ChatListItems')).toHaveLength(1);
    });
});
