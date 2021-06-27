import { createSelector } from 'reselect';

export const getModalState = state => state.modals;
export const getModalVisibilityByType = createSelector(
    getModalState,
     props => props.modalType,
    (modals, modalType) => modals[modalType],
);
export const getModalVisibilityIsOpen = createSelector(
    getModalState,
    ({ isOpen }) => isOpen,
);
