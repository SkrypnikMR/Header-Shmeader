import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { StChatTitle } from './styled';

const ChatTitle = ({ currentRoomName }) => {
  const { t } = useTranslation();
  return (
    <StChatTitle>
      <span>
        {currentRoomName}
      </span>
      <p>{t('user_list')}</p>
    </StChatTitle>
  );
};

ChatTitle.propTypes = {
  currentRoomName: PropTypes.string,
};

export default ChatTitle;
