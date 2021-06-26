import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StChatListItems, StPhoto } from './styled';

const ChatListItems = ({ color, img, content, setValue, id }) => {
  const handleClick = () => setValue({ name: 'currentRoom', value: { room_id: id, room_name: content } });
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
      <div>
        {content}
      </div>
    </StChatListItems>
  );
};

ChatListItems.propTypes = {
  content: PropTypes.string,
  img: PropTypes.any,
  color: PropTypes.string,
  setValue: PropTypes.func,
  id: PropTypes.number,
};

export default ChatListItems;
