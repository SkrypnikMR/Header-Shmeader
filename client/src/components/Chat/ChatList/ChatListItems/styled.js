import styled from 'styled-components';
import { textColorBlack } from '/src/components/UI/baseLayout';

export const StChatListItems = styled.div`
    display: flex;
    width: 100%;
    height: 60px;
    align-items: center;
    color: ${({ color = textColorBlack }) => color};

    cursor: pointer;
        ul {
          padding-left: 1rem;
          list-style-type: none;
        }
`;
export const StPhoto = styled.div`
margin: 5px 10px;
img{
  width: 50px;
  height: 50px;
}
`; 
