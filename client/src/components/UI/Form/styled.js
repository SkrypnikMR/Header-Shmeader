import styled from 'styled-components';

export const StFormDiv = styled.div`
    background-color: rgba(0, 0, 0, 0.4);
    min-height: 90vh;
    display: flex;
    width: 35%;
    margin: 35px auto;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    font-family: 'Play', sans-serif;
    border-radius: 20px;
    color: white;
        p{
          font-size: 65px;
          padding: 0;
          margin: 10px 0 10px 0;
        }
        span{
          padding: 10px 10px 20px 10px;
        }
        a{
          padding:10px;
          text-decoration: none;
        }
        button{margin-bottom: 10px}
        @media (max-width: 767px){
            width: 100%;
            border-radius: 0px;
        }
`;
