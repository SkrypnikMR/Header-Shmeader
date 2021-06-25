import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { StControl } from './styled';
import { HEADER_CONTROL_BTNS } from '/src/constants/componentsСonsts';
import Button from '../../UI/Button';
import { APP_ROUTES } from '/src/constants/reactRoutes';

const HeaderControlPanel = ({ history, location }) => {
    const { i18n } = useTranslation();
    const handleLanguageClick = (e) => {
        i18n.changeLanguage(e.target.value);
        localStorage.setItem('lang', e.target.value);
    };
    const handleMyAccountClick = () => history.push(APP_ROUTES.account);
    const spreader = (el) => {
        switch (el.id) {
            case 'account': return handleMyAccountClick;
            default: return handleLanguageClick;
        }
    };
    return (
        <StControl >
            {HEADER_CONTROL_BTNS.map((el, index) => {
               if (location.pathname !== '/chat' && location.pathname !== '/account' && index > 2) return null;
                return (
                    <Button
                    id={el.id}
                    content={el.content}
                    key={el.id}
                    color='white'
                    fontSize='26px'
                    width='60px'
                    height="10vh"
                    borderRadius="0px"
                    value={el.id}
                    bgColor='rgba(0,0,0,0)'
                    onClick={spreader(el)}
                    />
                );
            })}
        </StControl>
    );
};

HeaderControlPanel.propTypes = {
    history: PropTypes.array,
    location: PropTypes.object,
};

export default HeaderControlPanel;
