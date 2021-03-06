import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { StLogo } from './styled';

const Logo = ({ history }) => {
    const handleClick = () => {
        const { pathname } = history.location;
        return pathname === '/' || pathname === '/registration' ? history.push('/') : history.push('/chat');
    };
    const { t } = useTranslation();
    return (
        <StLogo onClick={handleClick}>
            <img src="./public/assets/images/logo.png" />
            <h1>{t('logo')}</h1>
        </StLogo>
    );
};

Logo.propTypes = {
    history: PropTypes.object,
};

export default Logo;
