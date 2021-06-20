import styled from 'styled-components';

export const StMessage = styled.form`
    display: flex;
    height: fit-content;
    width: 70%;
    font-size: 24px;
    font-family: 'Play', sans-serif;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 20px;
    margin-right:20px;
    flex-direction: column;
    flex: start;
    align-self: ${({ flex = 'flex-start' }) => flex};
`;

export const StData = styled.data`
    color: black;
    display: flex;
    height: fit-content;
    font-size: 14px;
    font-family: 'Play', sans-serif;
`;
export const StTitle = styled.text`
    display: flex;
    font-size: 20px;
    color: white;
    font-family: 'Play', sans-serif;
    justify-content: space-between;
    width: 100%;
    padding-top: 2px;
    padding-right: 2px;
`;

export const StPhoto = styled.form`
    display: flex;
    height: fit-content;
    width: 10%;
    font-family: 'Play', sans-serif;
    padding-left: 2.5rem;
    background-image: url(../../../../public/assets/images/user.png);
    background-position: 0 0;
    background-size: 2rem 2rem;
    background-repeat: no-repeat;
`;

export const StText = styled.form`
    display: flex;
    height: auto;
    width: 700px;
    align-content: center;
    margin:0;
    font-size: 20px;
    font-family: 'Play', sans-serif;
    flex-direction: column;
    background-color: rgba(196, 196, 196, 0.5);
    padding: 0 5px;
    border-radius: 5px;
    div{
        height: auto;
        padding 0;
        width: max-content;
        max-width: 700px;
    }

`;
