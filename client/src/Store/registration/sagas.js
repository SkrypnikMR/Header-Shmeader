import { takeEvery, call, select, put } from 'redux-saga/effects';
import { actionTypes } from './actionTypes';
import { regValues } from './selectors';
import { postRequest } from '../../helpers/requests';
import { setRegistrationSuccess } from './actions';

export function* workerRegistration() {
    try {
        const data = yield select(regValues);
        const serverAnswer = yield call(postRequest, 'http://localhost:2282/api/account/registration', data);
        if (serverAnswer.message === 'done') {
            yield put(setRegistrationSuccess(true));
        } else yield put(setRegistrationSuccess(false));
    } catch (e) {
        yield put(setRegistrationSuccess(false));
    }
}

export function* watcherRegistration() {
    yield takeEvery(actionTypes.SEND_REGISTRATION_REQUEST, workerRegistration);
}
