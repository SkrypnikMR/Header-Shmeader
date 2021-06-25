import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { StControl } from './styled';
import { HEADER_CONTROL_BTNS } from '/src/constants/componentsСonsts.js';
import Button from '../../UI/Button';
import { support } from '../../../helpers/support';

const HeaderControlPanel = ({ setValue, themeMode }) => {
    const { i18n } = useTranslation();
    const handleLanguageClick = (e) => {
        i18n.changeLanguage(e.target.value);
        localStorage.setItem('lang', e.target.value);
    };

    const handleThemeClick = () => {
        const { setSessionStorageItem } = support;
        if (themeMode === 'light') {
            setSessionStorageItem('themeMode', 'dark');
            return setValue({ name: 'themeMode', value: 'dark' });
        }
        setSessionStorageItem('themeMode', 'light');
        setValue({ name: 'themeMode', value: 'light' });
    };
    
    const spreader = (el) => {
      switch (el.id) {
          case 'theme_btn': return handleThemeClick;
          default: return handleLanguageClick;
      }
    };

    return (
        <StControl >
            {HEADER_CONTROL_BTNS.map(el => (
                <Button
                    id={el.id}
                    content={el.content}
                    key={el.id}
                    color='white'
                    width='60px'
                    height="10vh"
                    borderRadius="0px"
                    value={el.id}
                    bgColor='rgba(0,0,0,0)'
                    onClick={spreader(el)}
                />
            ))}
        </StControl>
    );
};

HeaderControlPanel.propTypes = {
  setValue: PropTypes.func,
  themeMode: PropTypes.string,
};

export default HeaderControlPanel;
