import { all, fork } from '@redux-saga/core/effects';
import { watcherRegistration } from './registration/sagas';
import { watcherLogin } from './login/sagas';
import { watcherUserOperations } from './chat/saga';

const sagas = [
    watcherRegistration,
    watcherLogin,
    watcherUserOperations,
];

export default function* rootSaga() {
    yield all(sagas.map(fork));
}
