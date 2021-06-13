import { actionTypes } from './actionTypes';

export const setEmailValue = payload => ({ type: actionTypes.SET_EMAIL_VALUE, payload });
export const setPasswordValue = payload => ({ type: actionTypes.SET_PASSWORD_VALUE, payload });
export const setConfirmValue = payload => ({ type: actionTypes.SET_CONFIRM_VALUE, payload });
export const setFirstNameValue = payload => ({ type: actionTypes.SET_FIRSTNAME_VALUE, payload });
export const setLastNameValue = payload => ({ type: actionTypes.SET_LASTNAME_VALUE, payload });
export const setRegistrationSuccess = payload => ({ type: actionTypes.SET_SUCCESS_VALUE, payload });
export const sendRegistrationRequest = payload => ({ type: actionTypes.SEND_REGISTRATION_REQUEST, payload });
