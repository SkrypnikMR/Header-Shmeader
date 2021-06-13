import { expectSaga, testSaga } from 'redux-saga-test-plan';
import * as sagas from '../sagas';
import { regValues } from '../selectors';
import { postRequest } from '../../../helpers/requests';
import { setRegistrationValue, clearRegistrationInputs } from '../actions';
import { actionTypes } from '../actionTypes';
import { routes } from '../../../contsants/routes';

describe('registrationSaga', () => {
    describe('workerRegistration', () => {
        let action;
        beforeEach(() => {
            action = {
                payload: {},
                type: actionTypes.SEND_REGISTRATION_REQUEST,
            };
        });
        const authValue = { login: 'login', password: '123456', confirm: '123456', firstName: 'Max', lastName: 'Skr' };
        const path = `${routes.account.registration}`;
        it('should call workerRegistration without error', () => {
            testSaga(sagas.workerRegistration, action)
                .next()
                .select(regValues)
                .next(authValue)
                .call(postRequest, path, authValue)
                .next({ message: 'done' })
                .put(clearRegistrationInputs())
                .next()
                .put(setRegistrationValue({ name: 'success', value: true }))
                .next()
                .isDone();
        });
        it('should call workerRegistration , serverAnswer !== done ', () => {
            testSaga(sagas.workerRegistration, action)
                .next()
                .select(regValues)
                .next(authValue)
                .call(postRequest, path, authValue)
                .next({ message: 'such exists user' })
                .put(setRegistrationValue({ name: 'success', value: false }))
                .next()
                .isDone();
        });
    });
    describe('watchers', () => {
        it('should run all watchers', () => {
            testSaga(sagas.watcherRegistration)
                .next()
                .takeEvery(actionTypes.SEND_REGISTRATION_REQUEST, sagas.workerRegistration)
                .next()
                .isDone();
        });
    });
    describe('fork', () => {
        it('should fork watchers', () => {
            expectSaga(sagas.watcherRegistration)
                .put({ type: 'FORKED' })
                .run();
        });
    });
});
