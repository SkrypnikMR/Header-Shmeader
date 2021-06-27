import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import Button from '../Button';
import { StModalHeader, customStyles, StBackground, StTextHeader } from './styled';

const ModalComponent = (props) => {
    const {
        isOpen, 
        onChangeIsOpen, 
        headerTextKey, 
        currentModalType,
        content,
        fontSize,
        Component,
    } = props;

    const handleCloseModal = () => onChangeIsOpen({ currentModalType, data: {} });

    return (
        <StBackground> 
            <Modal  
            isOpen={isOpen}
            onClick={handleCloseModal}
            style={customStyles}
            >
                <StModalHeader 
                headerTextKey={headerTextKey} 
                content={content} 
                fontSize={fontSize}
                >
                    <StTextHeader>
                    {headerTextKey}
                    </StTextHeader>
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
                {Component}
            </Modal>
        </StBackground> 
    );
};

ModalComponent.propTypes = {
    isOpen: PropTypes.bool,
    onChangeIsOpen: PropTypes.func.isRequired,
    headerTextKey: PropTypes.string,
    currentModalType: PropTypes.string, 
    Component: PropTypes.element, 
    content: PropTypes.string,
    fontSize: PropTypes.string,
};
 
export default ModalComponent;
