import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ChatList from './ChatList';
import ChatContent from './ChatContent';
import { StChat } from './styled';

const Chat = ({ connection }) => {
  useEffect(() => connection(), []);
  return (
    <StChat>
      <ChatList />
      <ChatContent />
    </StChat>
  );
};

Chat.propTypes = { connection: PropTypes.func.isRequired };

export default Chat;