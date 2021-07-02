import styled from 'styled-components';
import { bgColorDefault } from '/src/components/UI/baseLayout';

export const StControlPanel = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const StContentModalUsers = styled.div`
    display: flex;
    flex-direction: column;
`;
export const StUsersItem = styled.div`
    display: flex;
    flex-direction: column;
    height: 390px;
    width: 94%;
    overflow: auto;
        ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
            ::-webkit-scrollbar-thumb {
                width: 8px;
                background-color: ${({ color = bgColorDefault }) => color};
            }
`;
