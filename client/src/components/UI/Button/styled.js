import styled from 'styled-components';

const bgColorDefault = '#5573C1'; // ToDo all colors move to color matrix
const colorDefault = 'white';
const focusColorDefault = 'black';
// const bgColorImg = '#212527';
//тени добавить, дизейбл
export const StButton = styled.button`
  ${({ margin = '0 0 3px 0' }) => margin && `margin: ${margin}`};
  padding: ${({ padding = '5px' }) => padding};
  width: ${({ width = '170px' }) => width};
  height: ${({ height = '35px' }) => height};
  ${({ cursor = 'pointer' }) => cursor && `cursor: ${cursor}`};
  color: ${({ focusColorDefault = colorDefault }) => focusColorDefault};
  background: ${({ background = bgColorDefault }) => background};
  border-radius: ${({ borderRadius = '7px' }) => borderRadius}; 
  border: ${({ border = 'none' }) => border};
  outline: ${({ outline = 'none' }) => outline};
  ${({ transition = 'all 300ms ease-in-out' }) => transition && `transition: ${transition}`};
  &:hover {
    color: ${({ focusColor = focusColorDefault }) => focusColor};
    border: ${({ border = 'none' }) => border};
    &:focus {
      color: ${({ focusColor = focusColorDefault }) => focusColor};
   }
   font-size: ${({ fontSize = '16px' }) => fontSize};
   &:disabled{ border: ${({ border = '1px solid #999999' }) => border};
  background-color: ${({ background = '#cccccc' }) => background};
  color: ${({ focusColor = '#666666' }) => focusColor};
}
`;

// export const StIconBtn = styled.img`
//   width: ${({ width = '47px' }) => width};
//   height: ${({ height = '42px' }) => height}; 
//   background: ${({ background = bgColorImg }) => background};
//   color: ${({ focusColor = focusColorDefault }) => focusColor};
//   &:activ: ${({ focusColor = colorDefault }) => focusColor}
// `;
