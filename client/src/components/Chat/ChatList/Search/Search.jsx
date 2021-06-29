import React from 'react';
import PropTypes from 'prop-types';
import { INPUT_PLACEHOLDER_SEARCH } from '/src/constants/componentsСonsts.js';
import Input from '/src/components/UI/Input';
import { StSearch } from './styled';

const Search = ({ setValue, filterValue }) => {
  return ( 
    <StSearch>  
      { INPUT_PLACEHOLDER_SEARCH.map(el => (
      <Input
        id={el.id}
        height="60px"
        key={el.id}
        name="filterValue"
        inputHeight="60px"
        borderRadius="0px"
        value={filterValue}
        onChange={setValue}
        placeholder={el.placeholder}
        margin="0 auto" 
        bgColor="transparent"
        fontSizeInp="20px"
        borderColor="transparent"
        bgFocusColor="transparent"
        padding="17px"
      />
      ))}
    </StSearch> 
  );
};

Search.propTypes = {
  setValue: PropTypes.func,
  filterValue: PropTypes.string,
};

export default Search;
