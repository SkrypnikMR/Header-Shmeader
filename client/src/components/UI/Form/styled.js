import styled from 'styled-components';

export const StFormDiv = styled.div`
    background-color: rgba(0, 0, 0, 0.4);
    min-height: 80vh;
    display: flex;
    width: 40%;
    margin: 20px auto 0 auto;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    font-family: 'Play', sans-serif;
    border-radius: 20px;
    color: white;
    ${({ transition = 'all 300ms ease-in-out' }) => transition && `transition: ${transition}`};
        p{
          font-size: 65px;
          padding: 0;
          margin: 10px 0 10px 0;
        }
        span{
          padding: 10px 10px 20px 10px;
        }
        a{
          padding: 0 10px;
          text-decoration: none;
          color: rgb(0, 0, 118);
          font-weight: bold;
          &:hover{
            text-decoration: underline;
          }
        }
        button{margin-bottom: 10px}
        @media (max-width: 920px){
            width: 100%;
            border-radius: 0px;
        }
`;
