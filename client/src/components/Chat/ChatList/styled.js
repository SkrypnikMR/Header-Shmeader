import styled from 'styled-components';
import { bgColorDefault, bgColorDefaultFon } from '/src/components/UI/baseLayout';

export const StChatList = styled.div`
    background-color: ${({ color = bgColorDefaultFon }) => color};
    display: flex;
    width: 20%;
    margin-right: 0;
    font-size: 24px;
    flex-direction: column;
    font-family: 'Play', sans-serif;
    border-radius: 0px;
    border: 1px solid black;
    position: relative;
    height: 89.8vh;
    overflow-y: hidden;
    :hover {
      overflow-y: auto;
      overflow-x: auto;
    }
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
            ::-webkit-scrollbar-thumb {
              width: 8px;
              background-color: ${({ color = bgColorDefault }) => color};
            }
`;
