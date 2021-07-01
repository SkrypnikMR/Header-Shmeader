import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { StChatDisplay } from './styled';
import ChatMessages from './ChatMessages';

const ChatDisplay = ({ messages, currentUser, currentRoomName }) => {
  useEffect(() => {
    messagesEndRef.current.scrollIntoView();
  }, [currentRoomName, messages]);
  const messagesEndRef = useRef(null);
  return (
    <StChatDisplay>
      {messages[currentRoomName]?.length > 0 ? messages[currentRoomName].map((message) => {
        return (
          <ChatMessages
            author={message.author}
            key={message.time}
            messageText={message.text}
            messageTime={moment(message.time).format('YYYY-MM-DD HH:mm:ss')}
            alignSelf={currentUser === message.author
              ? 'flex-end'
              : 'flex-start'}
          />
        );
      }) : null}
      <div ref={messagesEndRef} />
    </StChatDisplay>
  );
};

ChatDisplay.propTypes = {
  messages: PropTypes.objectOf(PropTypes.array),
  currentUser: PropTypes.string,
  currentRoomName: PropTypes.string,
};

export default ChatDisplay;
