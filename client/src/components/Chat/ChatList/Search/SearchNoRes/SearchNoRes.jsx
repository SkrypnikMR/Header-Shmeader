import React from 'react';
import { StNoResTitle, StNoResWrapper, StNoResText } from './styled';
import { useTranslation } from 'react-i18next';

const SearchNoRes = () => {
    const { t } = useTranslation();
    return (
        <StNoResWrapper>
            <StNoResTitle>{t('no_result')}</StNoResTitle>
            <StNoResText>{t('try_new')}</StNoResText>
        </StNoResWrapper>
    );
};

export default SearchNoRes;
