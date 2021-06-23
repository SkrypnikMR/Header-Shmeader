import { takeEvery, call, select } from 'redux-saga/effects';
import { io } from 'socket.io-client';
import { actionTypes } from './actionTypes';
import { userInfo } from './selectors';

export function* workerUserListen() {
    const connection = (socket, user) => {
        socket.on('connect', () => {
            socket.emit('clientInfo', user);
        });
    };
    const listenOnlineUsers = (socket) => {
        socket.on('users_online', (onlineUsers) => {
            console.log(onlineUsers);
        });
    };
    const user = yield select(userInfo);
    const socket = yield call(io.connect, 'http://localhost:2282', { path: '/socket' });
    yield call(connection, socket, user);
    const online = yield call(listenOnlineUsers, socket);
}

export function* watcherUserOperations() {
    yield takeEvery(actionTypes.CONNECT, workerUserListen);
}
