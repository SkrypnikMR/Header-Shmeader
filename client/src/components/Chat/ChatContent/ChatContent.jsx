import React from 'react';
import ChatTitle from './ChatTitle';
import ChatDisplay from './ChatDisplay';
import ChatControlPanel from './ChatControlPanel';
import { StChatContant } from './styled';

const ChatContant = () => (
    <StChatContant>
      <ChatTitle />
      <ChatDisplay />
      <ChatControlPanel />
    </StChatContant>
  );


export default ChatContant;
