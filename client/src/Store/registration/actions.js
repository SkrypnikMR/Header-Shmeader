import * as AT from './actionTypes';

export const setEmailValue = payload => ({ type: AT.SET_EMAIL_VALUE, payload });
export const setPasswordValue = payload => ({ type: AT.SET_PASSWORD_VALUE, payload });
export const setConfirmValue = payload => ({ type: AT.SET_CONFIRM_VALUE, payload });
export const setFirstNameValue = payload => ({ type: AT.SET_FIRSTNAME_VALUE, payload });
export const setLastNameValue = payload => ({ type: AT.SET_LASTNAME_VALUE, payload });
export const setRegistrationSuccess = payload => ({ type: AT.SET_SUCCESS_VALUE, payload });
export const sendRegistrationRequest = payload => ({ type: AT.SEND_REGISTRATION_REQUEST, payload });
