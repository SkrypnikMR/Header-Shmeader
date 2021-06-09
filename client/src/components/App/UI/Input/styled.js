import styled from 'styled-components';

const bgInpColorDefault = '#F6F7FA';
const brBottomDefault = '2px solid #1bcccb';
const bgFocusColorDefault = '#716f6f';  // Move to color matrix
const focusColorDefault = 'white';
const focusBrBottomDefault = '2px solid #9900cc';
const intPaddingDefault = 'none';
const intOutlineDefault = 'none';
const brRadiusDefault = 0;
const intCursorDefault = 'pointer';
const colorDefault = 'black';
const paddingDefault = '5px';
const inputHeightDefault = '100%';
const fontSizeInpDefault = '14px';
const borderColorInpDefault = 'none';
const textAlignInputDefault = 'none';

export const Input = styled.input`
    width: 100%;
    height: ${props => (props.inputHeight ? props.inputHeight : inputHeightDefault)};
    box-sizing: border-box;
    padding: ${props => (props.padding ? props.padding : paddingDefault)};
    background: ${props => (props.bgColor ? props.bgColor : bgInpColorDefault)};
    border: ${props => (props.borderColorInp ? props.borderColorInp : borderColorInpDefault)};
    outline: ${props => (props.intOutline ? props.intOutline : intOutlineDefault)};
    padding: ${props => (props.padding ? props.padding : paddingDefault)};
    border-radius: ${props => (props.brRadius ? props.brRadius : `${brRadiusDefault}px`)};    
    cursor: ${props => (props.intCursor ? props.intCursor : intCursorDefault)};
    color: ${props => (props.color ? props.color : colorDefault)};
    font-size: ${props => (props.fontSizeInp ? props.fontSizeInp : fontSizeInpDefault)};
    text-align: ${props => (props.textAlignInput ? props.textAlignInput : textAlignInputDefault)};;

    &:focus {
      background:${props => (props.bgFocusColor ? props.bgFocusColor : bgFocusColorDefault)};
      color: ${props => (props.focusColor ? props.focusColor : focusColorDefault)};
    }
    
    &::placeholder {
      color: ${props => (props.color ? props.color : colorDefault)};
      font-size: ${props => (props.fontSizeInp ? props.fontSizeInp : fontSizeInpDefault)};
    }
    
  
`;

export const StErrorSpan = styled.span`
    color: ${({ color }) => `color: ${color}`};
`;

export const defaultStyles = {
    bgInpColorDefault,
    brBottomDefault,
    bgFocusColorDefault,
    focusColorDefault,
    focusBrBottomDefault,
    intPaddingDefault,
    intOutlineDefault,
    brRadiusDefault,
    intCursorDefault,
    colorDefault,
    paddingDefault,
};
