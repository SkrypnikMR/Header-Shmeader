import { createSelector } from 'reselect';

export const registrationStore = state => state.registration;
export const regValues = createSelector(
    registrationStore,
    ({ email, password, lastName, firstName }) => ({ email, password, lastName, firstName }),
);
