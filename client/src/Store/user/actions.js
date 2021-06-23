import { actionTypes } from './actionTypes';

export const setLoginValue = payload => ({ type: actionTypes.SET_VALUE, payload });
export const connection = () => ({ type: actionTypes.CONNECT });
