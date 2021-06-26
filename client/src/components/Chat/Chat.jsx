import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ChatList from './ChatList';
import ChatContent from './ChatContent';
import { StChat } from './styled';

const Chat = ({ connection, userID, getAllRooms, getAllMessages }) => {
  useEffect(() => {
    connection();
    getAllRooms(userID);
    getAllMessages(userID);
  }, []);
  return (
    <StChat>
      <ChatList />
      <ChatContent />
    </StChat>
  );
};

Chat.propTypes = {
  connection: PropTypes.func.isRequired,
  userID: PropTypes.number,
  getAllRooms: PropTypes.func.isRequired,
  getAllMessages: PropTypes.func.isRequired,
};

export default Chat;
