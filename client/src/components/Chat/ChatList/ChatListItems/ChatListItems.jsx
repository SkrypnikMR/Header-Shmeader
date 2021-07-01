import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StChatListItems, StPhoto, StRoom } from './styled';

const ChatListItems = ({
  id,
  img,
  color,
  content,
  setValue,
  unreadCount,
  resetUnreadCount,
  readAllMessagesInRoom,
}) => {
  const handleClick = () => {
    setValue({ name: 'currentRoom', value: { room_id: id, room_name: content } });
    readAllMessagesInRoom({ room_id: id, room_name: content });
    resetUnreadCount(content);
  };
  const [state, setState] = useState({
    error: false,
    src: img,
    defaultImg: '../../../../public/assets/images/defaultChats.png',
  });
  const onError = () => setState({ ...state, error: true, src: state.defaultImg });
  return (
    <StChatListItems color={color} onClick={handleClick}>
      <StPhoto>
        <img src={img ? state.src : state.defaultImg} onError={onError} />
      </StPhoto>
      <StRoom>
        <p>{content}</p>
        {unreadCount === 0 ? null : <span>{unreadCount}</span>}
      </StRoom>
    </StChatListItems>
  );
};

ChatListItems.propTypes = {
  img: PropTypes.any,
  id: PropTypes.number,
  color: PropTypes.string,
  setValue: PropTypes.func,
  content: PropTypes.string,
  unreadCount: PropTypes.number,
  readAllMessagesInRoom: PropTypes.func.isRequired,
  resetUnreadCount: PropTypes.func.isRequired,
};

export default ChatListItems;
