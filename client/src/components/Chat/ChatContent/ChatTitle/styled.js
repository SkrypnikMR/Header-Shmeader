import styled from 'styled-components';
import { bgColorDefault, bgColorDefaultFon, textColorBlack } from '/src/components/UI/baseLayout';

export const StChatTitle = styled.div`
    display: flex;
    width: 100%;
    height: 60px;
    justify-content: space-between;
    align-items: center;
    color: ${({ color = textColorBlack }) => color};
    font-size: 24px;
    font-family: 'Play', sans-serif;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    border-right: 1px solid black;
    padding: 5px 0;
    background-color: ${({ color = bgColorDefaultFon }) => color};
        span{
          color: ${({ color = bgColorDefault }) => color};
          margin-left: 20px;
        }
        p{
          cursor: pointer;
          margin-right: 20px;
          font-size: 16px;
        }
`;
