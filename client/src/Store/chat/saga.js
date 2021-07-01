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
    putMessagesFolders,
    putNewRoom,
    sendUsersRequest,
    getAllUsers,
    reciveSuccessUsersRequest,
    reciveErrorUsersRequest,
} from './actions';
import { userInfo } from '../user/selectors';
import { newMessage, currentRoom, messages } from './selectors';
import { getRequest, postRequest } from '../../helpers/requests';
import { routes } from '../../constants/routes';
import { support } from '/src/helpers/support';

export let globalSocket = { emit: () => { }, on: () => { } };

export const createSocketChannel = socket => eventChannel((emit) => {
    socket.on('users_online', data => emit(putOnlineUsers(data)));
    socket.on('messages', data => emit(putNewMessages(data)));
    socket.on('join_new_room', data => emit(putNewRoom(data)));
    socket.on('error', ({ error }) => {
        NotificationManager.error(i18next.t(error), i18next.t('input_error'), 2000);
    });
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
    yield call(getAllRoomsSaga);
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
            time: support.getFormatedDate(),
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
        return rooms;
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
        const users = yield call(getRequest, routes.chat.users);
        yield put(reciveSuccessUsersRequest(users));
    } catch (e) {
        yield put(reciveErrorUsersRequest());
        yield call([NotificationManager, NotificationManager.error],
            i18next.t('server_error_text'), i18next.t('server_error'), 2000);
    }
}
export function* createNewRoomSaga({ payload }) {
    try {
        const { id } = yield select(userInfo);
        yield call([globalSocket, globalSocket.emit], 'new_room', { id, room_name: payload });
    } catch (e) {
        yield call([NotificationManager, NotificationManager.error],
            i18next.t('server_error_text'), i18next.t('server_error'), 2000);
    }
}
export function* setLastReadedSaga({ payload }) {
    try {
        const { id: user_id } = yield select(userInfo);
        const allMessages = yield select(messages);
        const neededRoomMessages = allMessages[payload.room_name];
        if (neededRoomMessages.length === 0) return;
        const lastNeededRoomMessage = neededRoomMessages[neededRoomMessages.length - 1];
        const { time: lastMessageTime } = lastNeededRoomMessage;
        const body = {
            ...payload,
            user_id,
            lastMessageTime,
        };
        yield call(postRequest, `${routes.chat.reed_all_messages}`, body);
    } catch (e) {
        yield call([NotificationManager, NotificationManager.error],
            i18next.t('server_error_text'), i18next.t('server_error'), 2000);
    }
}
export function* watcherChatOperations() {
    yield takeEvery(actionTypes.INIT_CHAT, initSaga);
    yield takeEvery(actionTypes.CONNECT, connectionSaga);
    yield takeEvery(actionTypes.SEND_NEW_MESSAGE, sendMessageSaga);
    yield takeEvery(actionTypes.GET_ALL_MESSAGES, getAllMessagesSaga);
    yield takeEvery(actionTypes.CREATE_NEW_ROOM, createNewRoomSaga);
    yield takeEvery(actionTypes.READ_ALL_MESSAGES_IN_ROOM, setLastReadedSaga);
    yield takeEvery(actionTypes.GET_ALL_USERS, getAllUsersSaga);
}
