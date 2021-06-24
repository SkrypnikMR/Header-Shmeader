import React from 'react';
import PropTypes from 'prop-types';
import { StChatDisplay } from './styled';
import ChatMessages from './ChatMessages';

const ChatDisplay = ({ messages, currentUser }) => {
  return (
    <StChatDisplay>
      {messages.map(message => (
        <ChatMessages
          author={message.author}
          key={message.messageTime}
          messageText={message.messageText}
          messageTime={message.messageTime}
          alignSelf={currentUser === message.author
            ? 'flex-end'
            : 'flex-start'}
        />
      ))}
    </StChatDisplay>
  );
};

ChatDisplay.propTypes = {
  messages: PropTypes.array,
  currentUser: PropTypes.string,
};

export default ChatDisplay;
