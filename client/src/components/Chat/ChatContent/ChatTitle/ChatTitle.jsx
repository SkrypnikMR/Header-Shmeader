import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { StChatTitle } from './styled';

const ChatTitle = ({ content }) => { 
  const { t } = useTranslation();
  return (
    <StChatTitle>
      <div>{content}</div>
      <p>{t('user_list')}</p>
    </StChatTitle> 
  );
};

ChatTitle.propTypes = {
  content: PropTypes.string,
};

export default ChatTitle;
