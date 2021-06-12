import React from 'react';
import propTypes from 'prop-types';
import { StFormDiv } from './styled';

const Form = ({ children }) => <StFormDiv>{children}</StFormDiv>;

Form.propTypes = { children: propTypes.array };

export default Form;
