import React from 'react';
import { useTranslation } from 'react-i18next';
import { StControl } from './styled';
import { HEADER_CONTROL_BTNS } from '/src/constants/componentsСonsts.js';
import Button from '../../UI/Button';

const HeaderControlPanel = () => {
    const { i18n } = useTranslation();
    const handleClick = (e) => {
        i18n.changeLanguage(e.target.value);
        localStorage.setItem('lang', e.target.value);
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
                    onClick={handleClick}
                />
            ))}
        </StControl>
    );
};

export default HeaderControlPanel;
