import { actionTypes } from './actionTypes';

export const init = () => ({ type: actionTypes.INIT_CHAT });
export const setValue = payload => ({ type: actionTypes.SET_VALUE, payload });
export const connection = () => ({ type: actionTypes.CONNECT });
export const putOnlineUsers = payload => ({ type: actionTypes.PUT_ONLINE_USERS, payload });

export const getAllRooms = () => ({ type: actionTypes.GET_ALL_ROOMS });
export const sendRoomsRequest = () => ({ type: actionTypes.SEND_ROOMS_REQUEST });
export const reciveSuccessRoomsRequest = () => ({ type: actionTypes.ROOMS_REQUEST_SUCCESS });
export const reciveErrorRoomsRequest = () => ({ type: actionTypes.ROOMS_REQUEST_ERROR });
export const setAllRooms = payload => ({ type: actionTypes.SET_ALL_ROOMS, payload });
export const putMessagesFolders = payload => ({ type: actionTypes.PUT_MESSAGES_FOLDERS, payload });

export const getAllMessages = () => ({ type: actionTypes.GET_ALL_MESSAGES });
export const sendMessagesRequest = () => ({ type: actionTypes.SEND_MESSAGES_REQUEST });
export const reciveSuccessMessagesRequest = () => ({ type: actionTypes.MESSAGES_REQUEST_SUCCESS });
export const reciveErrorMessagesRequest = () => ({ type: actionTypes.MESSAGES_REQUEST_ERROR });
export const putMessages = payload => ({ type: actionTypes.PUT_MESSAGES, payload });

export const sendNewMessage = () => ({ type: actionTypes.SEND_NEW_MESSAGE });
export const putNewMessages = payload => ({ type: actionTypes.PUT_NEW_MESSAGES, payload });

export const getAllUsers = () => ({ type: actionTypes.GET_ALL_USERS });
export const sendUsersRequest = () => ({ type: actionTypes.SEND_USERS_REQUEST });
export const reciveSuccessUsersRequest = () => ({ type: actionTypes.USERS_REQUEST_SUCCESS });
export const reciveErrorUsersRequest = () => ({ type: actionTypes.USERS_REQUEST_ERROR });
export const setAllUsers = payload => ({ type: actionTypes.SET_ALL_USERS, payload });
