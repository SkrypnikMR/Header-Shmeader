import styled from 'styled-components';
import { bgColorDefault } from '../../UI/baseLayout';

export const StChatList = styled.form`
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    width: 30%;
    margin-right: 0;
    font-size: 24px;
    flex-direction: column;
    font-family: 'Play', sans-serif;
    border-radius: 0px;
    border: 1px solid black;
    position: relative;
    height: 100vh;
    overflow-y: hidden;
    :hover {
      overflow-y: auto;
    }
        ::-webkit-scrollbar {
          width: 8px;
        }
            ::-webkit-scrollbar-thumb {
              width: 8px;
              background-color: ${({ color = bgColorDefault }) => color};
            }
`;
