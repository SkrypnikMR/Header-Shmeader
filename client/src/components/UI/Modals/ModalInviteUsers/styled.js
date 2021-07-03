import styled from 'styled-components';
import { bgColorDefault } from '/src/components/UI/baseLayout';

export const StInviteUsersView = styled.div`
    width: 95%;
    margin-top: 20px;
    font-size: 20px;
    flex-direction: column;
    font-family: 'Play', sans-serif;
    border-radius: 0px;
    overflow: auto;
    height: 380px;
        ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
            ::-webkit-scrollbar-thumb {
                width: 8px;
                background-color: ${({ color = bgColorDefault }) => color};
            }
`;
export const StControlPanel = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const StContentModalUsers = styled.div`
    display: flex;
    flex-direction: column;
`;
