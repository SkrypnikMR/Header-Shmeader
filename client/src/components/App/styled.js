import styled from 'styled-components';

export const StAppDiv = styled.body`
  height: 100vh;
  ${({ url = 'heh' }) => url && `background: url(${url}) 100% 100% no-repeat`};
  background-size: cover;
`;
