import { actionTypes } from './actionTypes';

export const setLoginValue = payload => ({ type: actionTypes.SET_VALUE, payload });
export const connection = () => ({ type: actionTypes.CONNECT });
export const putOnlineUsers = payload => ({ type: actionTypes.PUT_ONLINE_USERS, payload });
