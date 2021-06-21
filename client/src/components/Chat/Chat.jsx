import React from 'react';
import { io } from 'socket.io-client';
import ChatList from './ChatList';
import ChatContent from './ChatContent';
import { StChat } from './styled';

io('http://localhost:2282', { path: '/socket' });
const Chat = () => {
  return (
    <StChat>
      <ChatList />
      <ChatContent />
    </StChat>
  );
};

export default Chat;
