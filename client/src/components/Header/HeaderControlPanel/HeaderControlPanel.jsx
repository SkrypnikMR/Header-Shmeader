import React from 'react';
import { useTranslation } from 'react-i18next';
import { StControl } from './styled';
import { CPBtns } from '/src/constants/componentsСonsts.js';
import Button from '../../UI/Button';

function HeaderControlPanel() {
    const { i18n } = useTranslation();
    const handleClick = (e) => {
        i18n.changeLanguage(e.target.id);
        localStorage.setItem('lang', `${e.target.id}`);
    };
    return (
        <StControl >
            {CPBtns.map(el => (
                <Button
                    id={el.id}
                    content={el.content}
                    key={el.id}
                    color='white'
                    width='60px'
                    height="10vh"
                    borderRadius="0px"
                    bgColor='rgba(0,0,0,0)'
                    onClick={handleClick}
                />
            ))}
        </StControl>
    );
}

export default HeaderControlPanel;
