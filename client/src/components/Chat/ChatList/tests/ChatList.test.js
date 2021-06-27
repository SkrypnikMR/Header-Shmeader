import React from 'react';
import configureStore from 'redux-mock-store';
import { shallowSmart, mountSmart } from '/src/helpers/testHelper';
import ChatList from '../ChatList';

const mockStore = configureStore();
const store = mockStore({
  chat: {
    onlineUsers: [],
    messages: {},
    newMessage: '',
    rooms: [{ room_id: 1, room_name: 'global' }],
    currentRoom: { room_id: null, room_name: '' },
    error: false,
    isLoading: false,
  },
  user: {
    userInfo: {
      email: 'SkripnikMRW@gmail.com',
      firstName: 'Max',
      lastName: 'Skripnik',
    },
  },
});

describe('ChatList', () => {
  it('Should match snapshot', () => {
    const component = shallowSmart(<ChatList />, store);
    expect(component.html).toMatchSnapshot();
  });
  it('Should render StChatList', () => {
    const component = mountSmart(<ChatList />, store);
    expect(component.find('styled__StChatList')).toHaveLength(1);
  });
  it('Should render Search', () => {
    const component = mountSmart(<ChatList />, store);
    expect(component.find('Search')).toHaveLength(1);
  });
  it('Should render ChatListItems', () => {
    const component = mountSmart(<ChatList />, store);
    expect(component.find('ChatListItems')).toHaveLength(0);
  });
});
