import { actionTypes } from './actionTypes';

export const setRegistrationValue = payload => ({ type: actionTypes.SET_VALUE, payload });
export const sendRegistrationRequest = payload => ({ type: actionTypes.SEND_REGISTRATION_REQUEST, payload });
export const clearRegistrationInputs = () => ({ type: actionTypes.CLEAR_INPUTS_VALUES });
