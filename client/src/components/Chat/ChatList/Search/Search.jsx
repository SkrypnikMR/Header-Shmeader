import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Input from '../../../UI/Input';
import { StSearch } from './styled';

const Search = ({ changeSearchValue, searchValue }) => {
  const { t } = useTranslation();
  return ( 
    <StSearch>  
      <Input
        id="filter"
        height="60px"
        key="filter"
        name="filter"
        inputHeight="60px"
        borderRadius="0px"
        value={searchValue}
        onChange={changeSearchValue}
        placeholder={t('placeholder_shearch_input')}
        margin="0 auto" 
        bgColor="transparent"
        fontSizeInp="20px"
        borderColor="transparent"
        bgFocusColor="transparent"
        padding="17px"
      />
    </StSearch> 
  );
};

Search.propTypes = {
  changeSearchValue: PropTypes.func,
  searchValue: PropTypes.string,
};

export default Search;
