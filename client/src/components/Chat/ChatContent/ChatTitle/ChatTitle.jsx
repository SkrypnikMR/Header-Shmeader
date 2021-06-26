import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { StChatTitle } from './styled';

const ChatTitle = ({ currentRoom }) => {
  const { t } = useTranslation();
  return (
    <StChatTitle>
      <span>
        {currentRoom}
      </span>
      <p>{t('user_list')}</p>
    </StChatTitle>
  );
};

ChatTitle.propTypes = {
  currentRoom: PropTypes.string,
};

export default ChatTitle;
