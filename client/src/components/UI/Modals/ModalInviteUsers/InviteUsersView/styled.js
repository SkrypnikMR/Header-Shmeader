import styled from 'styled-components';
import { bgColorDefault } from '/src/components/UI/baseLayout';

export const StControlPanel = styled.div`
    display: flex;
    border: solid 1px black;
    justify-content: space-between;
`;
export const StContentModalUsers = styled.div`
    display: flex;
    flex-direction: column;
`;
export const StUsersItem = styled.div`
    display: flex;
    flex-direction: column;
    height: 270px;
    width: 100%;
    overflow: auto;
        ::-webkit-scrollbar {
            width: 4px;
            height: 8px;
        }
            ::-webkit-scrollbar-thumb {
                width: 4px;
                background-color: ${({ color = bgColorDefault }) => color};
            }
`;
