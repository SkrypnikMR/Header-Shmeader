import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../../UI/Input';
import { StShearch } from './styled';

const Shearch = ({ handleInputChange, fields }) => {
  return ( 
    <StShearch>  
      <Input
        width="100%"
        id="filter"
        height="60px"
        key="filter"
        name="filter"
        inputHeight="60px"
        borderRadius="0px"
        value={fields}
        onChange={handleInputChange}
        placeholder="🔍  Shearch..."
        margin="0 auto" 
        bgColor="transparent"
        fontSizeInp="20px"
        borderColor="transparent"
        bgFocusColor="transparent"
        padding="17px"
      />
    </StShearch> 
  );
};

Shearch.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  fields: PropTypes.object.isRequired,
};

export default Shearch;
