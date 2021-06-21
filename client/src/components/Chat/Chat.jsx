import React from 'react';
import ChatList from './ChatList';
import ChatContent from './ChatContent';
import { StChat } from './styled';

const Chat = () => {
  return (
    <StChat>
      <ChatList />
      <ChatContent />
    </StChat>
  );
};

export default Chat;
