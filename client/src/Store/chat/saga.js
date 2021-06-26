import { takeEvery, call, put, take, select } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { io } from 'socket.io-client';
import { NotificationManager } from 'react-notifications';
import i18next from 'i18next';
import { actionTypes } from './actionTypes';
import { putOnlineUsers, putMessages, setAllRooms } from './actions';
import { userInfo } from '../user/selectors';
import { newMessage, currentRoom } from './selectors';
import { getRequest } from '../../helpers/requests';
import { routes } from '../../constants/routes';

let globalSocket = { emit: () => { }, on: () => { } };

export const createSocketChannel = socket => eventChannel((emit) => {
    socket.on('users_online', data => emit(putOnlineUsers(data)));
    socket.on('messages', data => emit(putMessages(data)));
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
        return NotificationManager.error(i18next.t('server_error_text'), i18next.t('server_error'), 2000);
    }
}
export function* sendMessage() {
    try {
        const { email } = yield select(userInfo);
        const message = yield select(newMessage);
        const room = yield select(currentRoom);
        if (!room) return NotificationManager.error(i18next.t('without_room'), i18next.t('input_error'), 2000);
        const requestMessage = {
            author: email,
            text: message,
            room,
            time: new Date().getTime(),
        };
        globalSocket.emit('messages', requestMessage);
    } catch (e) {
        return NotificationManager.error(i18next.t('server_error_text'), i18next.t('server_error'), 2000);
    }
}
export function* getAllRooms({ payload }) {
    try {
        const rooms = yield call(getRequest, `${routes.chat.rooms}?id=${payload}`);
        yield put(setAllRooms(rooms));
        const user = yield select(userInfo);
        rooms.forEach(room => globalSocket.emit('join', { user, room }));
    } catch (e) {
        return NotificationManager.error(i18next.t('server_error_text'), i18next.t('server_error'), 2000);
    }
}
export function* watcherUserOperations() {
    yield takeEvery(actionTypes.CONNECT, connectionSaga);
    yield takeEvery(actionTypes.SEND_NEW_MESSAGE, sendMessage);
    yield takeEvery(actionTypes.GET_ALL_ROOMS, getAllRooms);
}
