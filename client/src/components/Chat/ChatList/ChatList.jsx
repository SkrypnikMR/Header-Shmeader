import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search';
import ChatListItems from './ChatListItems';
import { StChatList } from './styled';
import SearchNoRes from './Search/SearchNoRes';
import { support } from '/src/helpers/support';

const ChatList = ({ rooms, filterValue }) => {
    rooms = filterValue ? support.filteredRooms(filterValue, rooms) : rooms;
    return (
    <StChatList>
      <Search />
      {rooms ? rooms.map(room => (
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

ChatList.propTypes = { rooms: PropTypes.array, filterValue: PropTypes.string };

export default ChatList;
