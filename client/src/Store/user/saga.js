import { takeEvery, call, put, take, select } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { io } from 'socket.io-client';
import { actionTypes } from './actionTypes';
import { putOnlineUsers } from './actions';
import { userInfo } from './selectors';

let socket;

const createSocketChannel = socket => eventChannel((emit) => {
    const handler = (data) => {
        emit(data);
    };
    socket.on('users_online', handler);
    return () => {
        socket.off('users_online', handler);
    };
});
const connect = (user) => {
    socket = io('localhost:2282', { path: '/socket' });
    return new Promise((resolve) => {
        socket.on('connect', () => {
            socket.emit('clientInfo', user);
            resolve(socket);
        });
    });
};
export function* listenServerSaga() {
    try {
        const user = yield select(userInfo);
        const socket = yield call(connect, user);
        const socketChannel = yield call(createSocketChannel, socket);
        while (true) {
            const payload = yield take(socketChannel);
            yield put(putOnlineUsers(payload));
        }
    } catch (e) {
        console.log(e);
    }
}
export function* watcherUserOperations() {
    yield takeEvery(actionTypes.CONNECT, listenServerSaga);
}
