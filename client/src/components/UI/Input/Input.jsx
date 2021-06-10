import React from 'react';
import PropTypes from 'prop-types';
import { StErrorSpan, StInput, StInputContainer, StLabel } from './styled';

const Input = ({
    id,
    type = 'text',
    name,
    width,
    label,
    value,
    onChange,
    maxLength,
    placeholder, // ToDo add text from translation lib React i18 next
    errorMessage,
}) => (
    <StInputContainer width={width}>
        {!!label && <StLabel htmlFor={id}>{label}</StLabel>}
        <StInput
            id={id}
            name={name}
            type={type}
            value={value}
            margin='0 0 5px'
            maxLength={maxLength}
            onChange={onChange}
            placeholder={placeholder}
        />
        {!!errorMessage && <StErrorSpan>{errorMessage}</StErrorSpan>}
    </StInputContainer>
);

Input.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    width: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    maxLength: PropTypes.number,
    placeholder: PropTypes.string.isRequired,
    errorMessage: PropTypes.string,
};

export default Input;
