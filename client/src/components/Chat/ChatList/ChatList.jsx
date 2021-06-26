import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search';
import ChatListItems from './ChatListItems';
import { StChatList } from './styled';

const ChatList = ({ rooms }) => {
  return (
    <StChatList>
      <Search />
      {rooms.map(room => (
        <ChatListItems
          key={room.roomID}
          content={room.room_name}
          id={room.room_id}
        />
      ))}
    </StChatList>
  );
};

ChatList.propTypes = {
  rooms: PropTypes.array,
};

export default ChatList;
