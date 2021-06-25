import { actionTypes } from './actionTypes';

export const setValue = payload => ({ type: actionTypes.SET_VALUE, payload });
export const setAuthValues = payload => ({ type: actionTypes.SET_AUTH_VALUES, payload });
