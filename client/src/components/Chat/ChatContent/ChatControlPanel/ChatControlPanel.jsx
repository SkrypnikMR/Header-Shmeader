import React from 'react';
import PropTypes from 'prop-types';
import { INPUT_PLACEHOLDER_MESSAGE } from '/src/constants/componentsСonsts.js';
import { StChatControlPanel } from './styled';
import Input from '/src/components/UI/Input';
import Button from '/src/components/UI/Button';

const ChatControlPanel = (
  { onChangeInput, messageInputValue, socket, author, sendNewMessage }) => {
  const handleOnclick = () => {
    if (socket) {
      socket.emit('messages', {
        author,
        messageText: messageInputValue,
        messageTime: new Date().getTime(),
      });
      sendNewMessage();
      onChangeInput({ name: 'newMessage', value: '' });
    }
  };
  return (
    <StChatControlPanel>
      {INPUT_PLACEHOLDER_MESSAGE.map(el => (
        <Input
          id={el.id}
          height="60px"
          key={el.id}
          name="newMessage"
          inputHeight="60px"
          borderRadius="0px"
          value={messageInputValue}
          onChange={onChangeInput}
          placeholder={el.placeholder}
          margin="0 auto"
          bgColor="transparent"
          fontSizeInp="20px"
          borderColor="transparent"
          bgFocusColor="transparent"
          padding="20px"
        />
      ))}
      <Button
        height="50px"
        width="50px"
        content="✈"
        fontSize="40px"
        borderRadius="0px"
        margin="0px"
        padding="0 60px 0 0"
        id="sendMessage"
        onClick={handleOnclick}
        bgColor="transparent"
      />
    </StChatControlPanel>
  );
};

ChatControlPanel.propTypes = {
  author: PropTypes.string,
  onChangeInput: PropTypes.func,
  sendNewMessage: PropTypes.func,
  messageInputValue: PropTypes.string,
  socket: PropTypes.object,
};

export default ChatControlPanel;
