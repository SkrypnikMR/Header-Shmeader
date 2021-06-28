import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Button from '../Button';
import { StModalHeader, customStyles, StTextHeader } from './styled';

const ModalComponent = ({
    isOpen, 
    onChangeIsOpen, 
    headerTextKey, 
    currentModalType,
    fontSize,
    Component, 
}) => {
    const { t } = useTranslation();
    const handleCloseModal = () => onChangeIsOpen({ currentModalType, data: {}, isOpen: false });
if (Component === currentModalType) return null;
    return (
            <Modal  
            isOpen={isOpen}
            onRequestClose={handleCloseModal}
            style={customStyles}
            >
                <StModalHeader 
                fontSize={fontSize}
                >
                    <StTextHeader>{t(headerTextKey)}</StTextHeader>
                    <Button 
                    height="50px"
                    width="50px"
                    content="×"
                    fontSize="45px"
                    borderRadius="0px"
                    margin="0px"
                    padding="0"
                    id="closeModal"
                    onClick={handleCloseModal}
                    bgColor="transparent"
                    />
                </StModalHeader>
                <Component currentModalType={currentModalType}/>
            </Modal>
    );
};

ModalComponent.propTypes = {
    isOpen: PropTypes.bool,
    onChangeIsOpen: PropTypes.func.isRequired,
    headerTextKey: PropTypes.string,
    currentModalType: PropTypes.string, 
    Component: PropTypes.element, 
    fontSize: PropTypes.string,
};
 
export default ModalComponent;
