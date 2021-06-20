import React from 'react';
import ChatList from './ChatList';
import ChatContant from './ChatContant';
import { StChat } from './styled';

const Chat = () => {
  return (
    <StChat>
      <ChatList />
      <ChatContant />
    </StChat>
  );
};

export default Chat;
