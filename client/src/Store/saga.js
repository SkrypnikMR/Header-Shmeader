import { all, fork } from '@redux-saga/core/effects';
import { watcherRegistration } from './registration/sagas';

export default function* rootSaga() {
    yield all([
        fork(watcherRegistration),
    ]);
}
