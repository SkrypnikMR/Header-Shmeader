import { takeEvery, call, put, take, select } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { io } from 'socket.io-client';
import { actionTypes } from './actionTypes';
import { putOnlineUsers, setValue, putMessages } from './actions';
import { userInfo, takeSocket } from './selectors';

let globalSocket;

const createUserOnlineSocketChannel = socket => eventChannel((emit) => {
    const handler = (data) => {
        emit(data);
    };
    socket.on('users_online', handler);
    return () => {
        socket.off('users_online', handler);
    };
});
const createMessageSocketChannel = socket => eventChannel((emit) => {
    const handler = (data) => {
        emit(data);
    };
    socket.on('messages', handler);
    return () => {
        socket.off('messages', handler);
    };
});
const connect = (user) => {
    globalSocket = io('localhost:2282');
    return new Promise((resolve) => {
        globalSocket.on('connect', () => {
            globalSocket.emit('clientInfo', user);
            resolve(globalSocket);
        });
    });
};
export function* connectionSaga() {
    const user = yield select(userInfo);
    const socket = yield call(connect, user);
    const socketChannel = yield call(createUserOnlineSocketChannel, socket);
    yield put(setValue({ name: 'socket', value: globalSocket }));
    while (true) {
        const payload = yield take(socketChannel);
        yield put(putOnlineUsers(payload));
    }
}
export function* messagesSaga() {
    const reduxSocket = yield select(takeSocket);
    const messagesChanel = yield call(createMessageSocketChannel, reduxSocket);
    while (true) {
        const payload = yield take(messagesChanel);
        yield put(putMessages(payload));
    }
}
export function* watcherUserOperations() {
    yield takeEvery(actionTypes.CONNECT, connectionSaga);
    yield takeEvery(actionTypes.SEND_NEW_MESSAGE, messagesSaga);
}
