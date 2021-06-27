import React from 'react';
import PropTypes from 'prop-types';
import { StChatDisplay } from './styled';
import ChatMessages from './ChatMessages';
import { support } from '../../../../helpers/support';

const ChatDisplay = ({ messages, currentUser, currentRoomName }) => {
  return (
    <StChatDisplay>
      {messages[currentRoomName]?.length > 0 ? messages[currentRoomName].map((message) => {
        return (
          <ChatMessages
            author={message.author}
            key={message.time}
            messageText={message.text}
            messageTime={support.getPrettyTime(message.time)}
            alignSelf={currentUser === message.author
              ? 'flex-end'
              : 'flex-start'}
          />
        );
      }) : null}
    </StChatDisplay>
  );
};

ChatDisplay.propTypes = {
  messages: PropTypes.objectOf(PropTypes.array),
  currentUser: PropTypes.string,
  currentRoomName: PropTypes.string,
};

export default ChatDisplay;
