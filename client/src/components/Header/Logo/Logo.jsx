import React from 'react';
import { useTranslation } from 'react-i18next';
import { StLogo } from './styled';

const Logo = () => {
    const { t } = useTranslation();
    return (
        <StLogo>
            <img src="./public/assets/images/logo.png" />
            <h1>{t('logo')}</h1>
        </StLogo>
    );
};

export default Logo;
