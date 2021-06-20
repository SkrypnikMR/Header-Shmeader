import styled from 'styled-components';

export const StChatListItems = styled.section`
    display: flex;
    width: 100%;
    height: 60px;
    justify-content: space-between;
    align-items: center;
    color: ${({ color = 'black' }) => color};

    cursor: pointer;
        ul {
          padding-left: 1rem;
          list-style-type: none;
        }
            ul li {
              padding-left: 2.5rem;
              background-image: url(../../../../public/assets/images/user.png);
              background-position: 0 0;
              background-size: 1.6rem 1.6rem;
              background-repeat: no-repeat;
            }
`;
