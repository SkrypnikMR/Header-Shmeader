import { all, fork } from '@redux-saga/core/effects';
import { watcherRegistration } from './registration/sagas';
import { watcherLogin } from './login/sagas';
import { watcherChatOperations } from './chat/saga';

const sagas = [
    watcherRegistration,
    watcherLogin,
    watcherChatOperations,
];

export default function* rootSaga() {
    yield all(sagas.map(fork));
}
