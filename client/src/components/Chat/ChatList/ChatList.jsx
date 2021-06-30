import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search';
import ChatListItems from './ChatListItems';
import { StChatList } from './styled';
import SearchNoRes from './Search/SearchNoRes';

const ChatList = ({ rooms }) => {
    return (
    <StChatList>
      <Search />
      {rooms?.length > 0 ? rooms.map(room => (
        <ChatListItems
          key={room.room_id}
          content={room.room_name}
          id={room.room_id}
        />
      )) : <SearchNoRes/>
      }
    </StChatList>
  );
};

ChatList.propTypes = { rooms: PropTypes.array };

export default ChatList;
