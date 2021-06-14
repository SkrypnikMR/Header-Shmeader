import { takeEvery, call, select, put } from 'redux-saga/effects';
import { postRequest } from '/src/helpers/requests';
import { routes } from '/src/contsants/routes';
import { actionTypes } from './actionTypes';
import { logValues } from './selectors';
import { setLoginValue, clearLoginInputs, reciveErrorRequest, reciveSuccessRequest } from './actions';

export function* workerLogin() {
    try {
        const data = yield select(logValues);
        const serverAnswer = yield call(postRequest, routes.account.login, data);
        if (serverAnswer.message === 'done') {
            yield (put(clearLoginInputs()));
            yield put(setLoginValue({ name: 'success', value: true }));
            yield put(reciveSuccessRequest());
        } else {
            yield put(setLoginValue({ name: 'success', value: false }));
            yield put(reciveErrorRequest());
        }
    } catch (e) {
        yield put(setLoginValue({ name: 'success', value: false }));
        yield put(reciveErrorRequest());
    }
}

export function* watcherLogin() {
    yield takeEvery(actionTypes.SEND_LOGIN_REQUEST, workerLogin);
}
