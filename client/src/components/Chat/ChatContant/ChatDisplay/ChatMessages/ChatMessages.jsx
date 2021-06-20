import React from 'react';
import { StMessage, StText, StPhoto, StData, StTitle } from './styled';

const ChatMessages = () => {
  return (
    <StMessage flex="flex-start"> 
        <StPhoto> 
          <StText>
            <StTitle>
            Name
            <StData>19.06.2021</StData>
            </StTitle>
            <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Eveniet exercitationem praesentium nihil dolorem deserunt a dolores sequi, itaque dolor laudantium?
            </div>
          </StText>
        </StPhoto>
    </StMessage>
  );
};

export default ChatMessages;
