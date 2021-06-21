import React from 'react';
import { StChatDisplay } from './styled';
import ChatMessages from './ChatMessages';

const ChatDisplay = () => {
  return (
    <StChatDisplay>
      <ChatMessages/>
    </StChatDisplay>
  );
};

export default ChatDisplay;
