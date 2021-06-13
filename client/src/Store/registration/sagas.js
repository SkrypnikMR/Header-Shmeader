import { takeEvery, call, select, put } from 'redux-saga/effects';
import { actionTypes } from './actionTypes';
import { regValues } from './selectors';
import { postRequest } from '../../helpers/requests';
import { setRegistrationValue, clearRegistrationInputs } from './actions';
import { routes } from '../../contsants/routes';

export function* workerRegistration() {
    try {
        const data = yield select(regValues);
        const serverAnswer = yield call(postRequest, routes.account.registration, data);
        if (serverAnswer.message === 'done') {
            yield (put(clearRegistrationInputs()));
            yield put(setRegistrationValue({ name: 'success', value: true }));
        } else {
            yield put(setRegistrationValue({ name: 'success', value: false }));
        }
    } catch (e) {
        yield put(setRegistrationValue({ name: 'success', value: false }));
    }
}

export function* watcherRegistration() {
    yield takeEvery(actionTypes.SEND_REGISTRATION_REQUEST, workerRegistration);
}
