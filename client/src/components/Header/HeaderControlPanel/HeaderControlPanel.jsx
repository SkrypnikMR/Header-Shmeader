import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { StControl } from './styled';
import { HEADER_CONTROL_BTNS } from '/src/constants/componentsСonsts';
import Button from '../../UI/Button';
import { APP_ROUTES } from '/src/constants/reactRoutes';
import { ROUTS_WITHOUT_MY_ACCOUNT } from '/src/constants/ui';

const HeaderControlPanel = ({ history, location }) => {
    const { i18n } = useTranslation();
    const handleChangeLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
        localStorage.setItem('lang', e.target.value);
    };
    const handleMyAccountClick = () => history.push(APP_ROUTES.account);
    const getFunctionForButtons = (el) => {
        switch (el.id) {
            case 'account': return handleMyAccountClick;
            default: return handleChangeLanguage;
        }
    };
    return (
        <StControl >
            {HEADER_CONTROL_BTNS.map((el) => {
                if ((el.rout === '/account' && ROUTS_WITHOUT_MY_ACCOUNT.includes(location.pathname))
                    || el.rout === location.pathname) return null;
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
                    onClick={getFunctionForButtons(el)}
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
