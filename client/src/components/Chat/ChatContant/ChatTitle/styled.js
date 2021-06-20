import styled from 'styled-components';
import { bgColorDefault } from '../../../UI/baseLayout';

export const StChatTitle = styled.form`
    display: flex;
    width: 100%;
    height: 60px;
    justify-content: space-between;
    align-items: center;
    color: black;
    font-size: 24px;
    font-family: 'Play', sans-serif;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    border-right: 1px solid black;
    background-color: rgba(0, 0, 0, 0.4);
        div{
          color: ${({ color = bgColorDefault }) => color};
          margin-left: 20px;
        }
        p{
          cursor: pointer;
          margin-right: 20px;
        }
`;
