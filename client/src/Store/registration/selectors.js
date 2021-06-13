import { createSelector } from 'reselect';


export const registrationStore = state => state.registration;

export const regValues = createSelector(
    registrationStore,
    registration => ({
        email: registration.email,
        password: registration.password,
        firstName: registration.firstName,
        lastName: registration.lastName,
    }),
);
