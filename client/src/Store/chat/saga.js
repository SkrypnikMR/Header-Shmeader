import { takeEvery, call, put, take, select } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { io } from 'socket.io-client';
import { actionTypes } from './actionTypes';
import { putOnlineUsers, putMessages } from './actions';
import { userInfo } from '../user/selectors';
import { newMessage } from './selectors';

let globalSocket;

const createSocketChannel = socket => eventChannel((emit) => {
    socket.on('users_online', data => emit(putOnlineUsers(data)));
    socket.on('messages', data => emit(putMessages(data)));
    return () => {
        socket.off('users_online', data => emit(putOnlineUsers(data)));
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
    const socketChannel = yield call(createSocketChannel, socket);
    while (socketChannel) {
        const payload = yield take(socketChannel);
        console.log(payload);
        yield put(payload);
    }
}
export function* sendMessage() {
    const { email } = yield select(userInfo);
    const message = yield select(newMessage);
    const requestMessage = {
        author: email,
        messageText: message,
        messageTime: new Date().getTime(),
    };
    globalSocket.emit('messages', requestMessage);
}
export function* watcherUserOperations() {
    yield takeEvery(actionTypes.CONNECT, connectionSaga);
    yield takeEvery(actionTypes.SEND_NEW_MESSAGE, sendMessage);
}
