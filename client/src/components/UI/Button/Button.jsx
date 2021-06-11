import React from 'react';
import PropTypes from 'prop-types';
import { StButton } from './styled';

const Button = ({
    id,
    name,
    onClick,
    title,
    type = 'submit',
    value,
}) => (
    <StButton
        id={id}
        name={name}
        onClick={onClick}
        type={type}
        value={value}
    >
    {title}
    </StButton>
  ); 

Button.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string,
};

export default Button;
