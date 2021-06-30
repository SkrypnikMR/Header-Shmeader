import { takeEvery, call, put, take, select } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { io } from 'socket.io-client';
import { NotificationManager } from 'react-notifications';
import i18next from 'i18next';
import { actionTypes } from './actionTypes';
import {
    putOnlineUsers,
    putMessages,
    setAllRooms,
    putNewMessages,
    sendRoomsRequest,
    reciveSuccessRoomsRequest,
    reciveErrorRoomsRequest,
    sendMessagesRequest,
    reciveSuccessMessagesRequest,
    reciveErrorMessagesRequest,
    connection,
    getAllMessages,
    getAllRooms,
    getAllUsers, 
    putMessagesFolders,
    sendUsersRequest,
    reciveSuccessUsersRequest,
    reciveErrorUsersRequest,
    setAllUsers,
    
} from './actions';
import { userInfo } from '../user/selectors';
import { newMessage, currentRoom } from './selectors';
import { getRequest } from '../../helpers/requests';
import { routes } from '../../constants/routes';
import { support } from '/src/helpers/support';

export let globalSocket = { emit: () => { }, on: () => { } };

export const createSocketChannel = socket => eventChannel((emit) => {
    socket.on('users_online', data => emit(putOnlineUsers(data)));
    socket.on('messages', data => emit(putNewMessages(data)));
    return () => {
        socket.off('users_online', data => emit(putOnlineUsers(data)));
    };
});
export const connect = (user) => {
    globalSocket = io('localhost:2282');
    return new Promise((resolve) => {
        globalSocket.on('connect', () => {
            globalSocket.emit('clientInfo', user);
            resolve(globalSocket);
        });
    });
};
export function* initSaga() {
    yield put(connection());
    yield put(getAllRooms());
    yield put(getAllMessages());
    yield put(getAllUsers());
}
export function* connectionSaga() {
    try {
        const user = yield select(userInfo);
        const socket = yield call(connect, user);
        const socketChannel = yield call(createSocketChannel, socket);
        while (socketChannel) {
            const payload = yield take(socketChannel);
            yield put(payload);
        }
    } catch (e) {
        yield call([NotificationManager, NotificationManager.error], i18next.t('server_error_text'), i18next.t('server_error'), 2000);
    }
}
export function* sendMessageSaga() {
    try {
        const { email } = yield select(userInfo);
        const message = yield select(newMessage);
        const { room_name, room_id } = yield select(currentRoom);
        if (!message) {
            return yield call([NotificationManager, NotificationManager.error],
                i18next.t('without_text'), i18next.t('input_error'), 2000);
        }
        if (!room_name) {
            return yield call([NotificationManager, NotificationManager.error],
                i18next.t('without_room'), i18next.t('input_error'), 2000);
        }
        const requestMessage = {
            author: email,
            text: message,
            room_name,
            room_id,
            time: new Date().getTime(),
        };
        yield call([globalSocket, globalSocket.emit], 'messages', requestMessage);
    } catch (e) {
        yield call([NotificationManager, NotificationManager.error],
            i18next.t('server_error_text'), i18next.t('server_error'), 2000);
    }
}
export function* getAllRoomsSaga() {
    try {
        const { id } = yield select(userInfo);
        yield put(sendRoomsRequest());
        const rooms = yield call(getRequest, `${routes.chat.rooms}?id=${id}`);
        yield put(reciveSuccessRoomsRequest());
        yield put(setAllRooms(rooms));
        const messagesFolders = yield call([support, support.getMessagesFolders], rooms);
        yield put(putMessagesFolders(messagesFolders));
        yield call([globalSocket, globalSocket.emit], 'join', rooms);
    } catch (e) {
        yield put(reciveErrorRoomsRequest());
        yield call([NotificationManager, NotificationManager.error],
            i18next.t('server_error_text'), i18next.t('server_error'), 2000);
    }
}
export function* getAllMessagesSaga() {
    try {
        const { id } = yield select(userInfo);
        yield put(sendMessagesRequest());
        const messages = yield call(getRequest, `${routes.chat.messages}?id=${id}`);
        yield put(reciveSuccessMessagesRequest());
        yield put(putMessages(messages));
    } catch (e) {
        yield put(reciveErrorMessagesRequest());
        yield call([NotificationManager, NotificationManager.error],
            i18next.t('server_error_text'), i18next.t('server_error'), 2000);
    }
}
export function* getAllUsersSaga() {
    try {
    yield put(sendUsersRequest());
    const users = yield call(getRequest, `${routes.chat.users}`);
    yield put(reciveSuccessUsersRequest());
    yield put(setAllUsers(users));
    } catch (e) {
        yield put(reciveErrorUsersRequest());
        yield call([NotificationManager, NotificationManager.error],
            i18next.t('server_error_text'), i18next.t('server_error'), 2000);
    }
}
export function* watcherChatOperations() {
    yield takeEvery(actionTypes.INIT_CHAT, initSaga);
    yield takeEvery(actionTypes.CONNECT, connectionSaga);
    yield takeEvery(actionTypes.SEND_NEW_MESSAGE, sendMessageSaga);
    yield takeEvery(actionTypes.GET_ALL_ROOMS, getAllRoomsSaga);
    yield takeEvery(actionTypes.GET_ALL_MESSAGES, getAllMessagesSaga);
    yield takeEvery(actionTypes.GET_ALL_USERS, getAllUsersSaga);
}
