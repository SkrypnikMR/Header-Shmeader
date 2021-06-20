import React from 'react';
import PropTypes from 'prop-types';
import { StChatControlPanel } from './styled';
import Input from '../../../UI/Input';
import Button from '../../../UI/Button';

const ChatControlPanel = ({ sendMessage, handleInputChange, fields }) => {
  return (
    <StChatControlPanel>
      <Input
        width="100%"
        id="filter"
        height="60px"
        key="filter"
        name="filter"
        inputHeight="60px"
        borderRadius="0px"
        value={fields}
        onChange={handleInputChange}
        placeholder="Write a message..."
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
  sendMessage: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  fields: PropTypes.object.isRequired,
};

export default ChatControlPanel;
