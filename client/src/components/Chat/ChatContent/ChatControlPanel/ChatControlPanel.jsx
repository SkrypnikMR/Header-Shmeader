import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { StChatControlPanel } from './styled';
import Input from '/src/components/UI/Input';
import Button from '/src/components/UI/Button';

const ChatControlPanel = (
  { sendMessage, onChangeInput, messageInputValue }) => {
  const { t } = useTranslation();
  return (
    <StChatControlPanel>
      <Input
        id="filter"
        height="60px"
        key="filter"
        name="filter"
        inputHeight="60px"
        borderRadius="0px"
        value={messageInputValue}
        onChange={onChangeInput}
        placeholder={t('placeholder_control_input')}
        margin="0 auto" 
        bgColor="transparent"
        fontSizeInp="20px"
        borderColor="transparent"
        bgFocusColor="transparent"
        padding="20px"
      />
      <Button
        height="50px"
        width="50px"
        content="✈"
        fontSize="40px"
        borderRadius="0px"
        margin="0px"
        padding="0 60px 0 0"
        id="sendMessage"
        onClick={sendMessage}
        color="transparent"
      />
    </StChatControlPanel> 
  );
};

ChatControlPanel.propTypes = {
  sendMessage: PropTypes.func,
  onChangeInput: PropTypes.func,
  messageInputValue: PropTypes.string,
};

export default ChatControlPanel;
