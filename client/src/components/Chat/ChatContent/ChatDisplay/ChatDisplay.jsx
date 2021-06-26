import React from 'react';
import PropTypes from 'prop-types';
import { StChatDisplay } from './styled';
import ChatMessages from './ChatMessages';

const ChatDisplay = ({ messages, currentUser }) => {
  return (
    <StChatDisplay>
      {messages.length > 0 ? messages.map(message => (
        <ChatMessages
          author={message.author}
          key={message.time}
          messageText={message.text}
          messageTime={`${new Date(message.time).toTimeString().substr(0, 8)}`}
          alignSelf={currentUser === message.author
            ? 'flex-end'
            : 'flex-start'}
        />
      )) : null}
    </StChatDisplay>
  );
};

ChatDisplay.propTypes = {
  messages: PropTypes.array,
  currentUser: PropTypes.string,
};

export default ChatDisplay;
