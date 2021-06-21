import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StChatListItems, StPhoto } from './styled';

const ChatListItems = ({ img, content }) => {
  const [state, setState] = useState({
    error: false,
    src: img,
    defaultImg: '../../../../public/assets/images/defaultChats.png',
  });
  const onError = () => setState({ ...state, error: true, src: state.defaultImg });
  return (
    <StChatListItems color="black">
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
};

export default ChatListItems;
