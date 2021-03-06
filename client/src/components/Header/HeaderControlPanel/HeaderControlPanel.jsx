import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { StControl } from './styled';
import { HEADER_CONTROL_BTNS } from '/src/constants/componentsСonsts';
import Button from '../../UI/Button';
import { APP_ROUTES } from '/src/constants/reactRoutes';
import { ROUTS_WITHOUT_MY_ACCOUNT } from '../../../constants/ui';
import { support } from '../../../helpers/support';
import { colorDefault } from '../../UI/baseLayout';

const HeaderControlPanel = ({ themeMode, setValue, history, location, logOut }) => {
    const { i18n } = useTranslation();
    const handleChangeLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
        localStorage.setItem('lang', e.target.value);
    };
    const handleThemeClick = ({ target }) => {
        support.setSessionStorageItem('themeMode', target.value);
        setValue({ name: 'themeMode', value: target.value });
    };
    const handleLogOutClick = () => {
        logOut();
        history.push(APP_ROUTES.login);
    };
    const handleMyAccountClick = () => history.push(APP_ROUTES.account);
    const getFunctionForButtons = (el) => {
        switch (el.id) {
            case 'theme_btn': return handleThemeClick;
            case 'logOut': return handleLogOutClick;
            case 'account': return handleMyAccountClick;
            default: return handleChangeLanguage;
        }
    };
    return (
        <StControl >
            {HEADER_CONTROL_BTNS.map((el) => {
                if (el.value === themeMode) return null;
                if ((el.rout === '/account' && ROUTS_WITHOUT_MY_ACCOUNT.includes(location.pathname))
                    || el.rout === location.pathname) return null;
                return (
                    <Button
                        id={el.id}
                        content={el.content}
                        key={el.id}
                        color={colorDefault}
                        fontSize='26px'
                        width='60px'
                        height="10vh"
                        borderRadius="0px"
                        value={el.value}
                        bgColor="transparent"
                        onClick={getFunctionForButtons(el)}
                    />
                );
            })}
        </StControl>
    );
};

HeaderControlPanel.propTypes = {
    setValue: PropTypes.func,
    themeMode: PropTypes.string,
    history: PropTypes.object,
    location: PropTypes.object,
    logOut: PropTypes.func,
};

export default HeaderControlPanel;
