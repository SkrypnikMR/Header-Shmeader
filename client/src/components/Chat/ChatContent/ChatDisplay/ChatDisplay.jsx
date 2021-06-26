import React from 'react';
import PropTypes from 'prop-types';
import { StChatDisplay } from './styled';
import ChatMessages from './ChatMessages';

const ChatDisplay = ({ messages, currentUser, currentRoom }) => {
  const getPrettyTime = time => `${new Date(Number(time)).toTimeString().substr(0, 8)}`;

  return (
    <StChatDisplay>
      {messages.length > 0 ? messages.map((message) => {
        if (message.room.room_id !== currentRoom.room_id) return null;
        return (
          <ChatMessages
            author={message.author}
            key={message.time}
            messageText={message.text}
            messageTime={getPrettyTime(message.time)}
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
  messages: PropTypes.array,
  currentUser: PropTypes.string,
  currentRoom: PropTypes.object,
};

export default ChatDisplay;
