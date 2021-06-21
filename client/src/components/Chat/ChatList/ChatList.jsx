import React from 'react';
import Search from './Search';
import ChatListItems from './ChatListItems';
import { StChatList } from './styled';

const ChatList = () => {
  return (
    <StChatList>
      <Search />
      <ChatListItems />
    </StChatList>
  );
};

export default ChatList;
