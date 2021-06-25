import { actionTypes } from './actionTypes';

export const setValue = payload => ({ type: actionTypes.SET_VALUE, payload });
export const connection = () => ({ type: actionTypes.CONNECT });
export const putOnlineUsers = payload => ({ type: actionTypes.PUT_ONLINE_USERS, payload });
export const putMessages = payload => ({ type: actionTypes.PUT_MESSAGES, payload });
export const sendNewMessage = () => ({ type: actionTypes.SEND_NEW_MESSAGE });
