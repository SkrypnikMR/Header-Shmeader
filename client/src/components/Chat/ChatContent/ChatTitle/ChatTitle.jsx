import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { StChatTitle } from './styled';

const ChatTitle = ({ currentRoomName, changeModalVisibility }) => {
  const { t } = useTranslation();
  const handleOpenModalInviteUsers = () => changeModalVisibility({
      isOpen: true, data: {}, modalType: 'usersInChat',
  });
  return (
    <StChatTitle>
      <span>
        {currentRoomName}
      </span>
      <p>{t('user_list')}</p>
      <button onClick={handleOpenModalInviteUsers}>OPEN USERS MODAL</button>
    </StChatTitle>
  );
};

ChatTitle.propTypes = {
  currentRoomName: PropTypes.string, 
  changeModalVisibility: PropTypes.func,
};

export default ChatTitle;
