import { all, fork } from '@redux-saga/core/effects';
import { watcherRegistration } from './registration/sagas';
import { watcherLogin } from './login/sagas';


export default function* rootSaga() {
    yield all([
        fork(watcherRegistration),
    ]);
    yield all([
      fork(watcherLogin),
  ]);
}
