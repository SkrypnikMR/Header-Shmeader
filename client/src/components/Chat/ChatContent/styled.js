import styled from 'styled-components';
import { textColorBlack } from '/src/components/UI/baseLayout';

export const StChatContant = styled.div`
    display: flex;
    width: 80%;
    height: 90vh;
    color: ${({ color = textColorBlack }) => color};
    font-size: 24px;
    margin-left: 0;
    margin-right: auto;
    font-family: 'Play', sans-serif;
    flex-direction: column;
`;
