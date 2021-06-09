import React from 'react';
import PropTypes from 'prop-types';
import classes from './Input.css';

const Input = ({
    id,
    label,
    value,
    onChange,
    placeholder,
    errorMessage,
    name,
    type = "text",
}) => {
    const cls = [classes.Input];

    const handleChange = event => onChange(event);
    
    return (
        <div className={cls.join(' ')}>
            {!!label && <label id={id} htmlFor={id}>{label}</label>}
            <input
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
            {!!errorMessage && <span>{errorMessage}</span>}
        </div>
    );
};

Input.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    errorMessage: PropTypes.string,
};

export default Input;
