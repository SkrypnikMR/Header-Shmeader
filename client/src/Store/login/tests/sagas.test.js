import { expectSaga, testSaga } from 'redux-saga-test-plan';
import { routes } from 'src/constants/routes';
import { postRequest } from 'src/helpers/requests';
import * as sagas from '../sagas';
import { logValues } from '../selectors';
import { setLoginValue, clearLoginInputs, reciveErrorRequest, reciveSuccessRequest } from '../actions';
import { actionTypes } from '../actionTypes';


jest.mock('../../../helpers/validation', () => ({
    validation: {
        loginValidation: jest.fn().mockReturnValue({ isValid: true, message: 'validation' }),
    },
}));

describe('loginSaga', () => {
    describe('workerLogin', () => {
        let action;
        beforeEach(() => {
            action = {
                type: actionTypes.SEND_LOGIN_REQUEST,
            };
        });
        const logValue = { login: 'login', password: '123456' };
        const path = `${routes.account.login}`;
        it('should call workerLogin without error', () => {
            testSaga(sagas.workerLogin, action)
                .next()
                .select(logValues)
                .next(logValue)
                .call(postRequest, path, logValue)
                .next({
                    token: 'someVeryLongToken',
                    userInfo: {
                        id: 1,
                        firstName: 'Max',
                        lastName: 'Skrypnik',
                        email: 'SkripnikMRW@GMAIL.COM',
                    },
                })
                .put(clearLoginInputs())
                .next()
                .put(setLoginValue({ name: 'success', value: true }))
                .next()
                .put(reciveSuccessRequest())
                .next()
                .isDone();
        });
        it('should call workerLogin , serverAnswer !== done ', () => {
            testSaga(sagas.workerLogin, action)
                .next()
                .select(logValues)
                .next(logValue)
                .call(postRequest, path, logValue)
                .next({ message: 'such exists user' })
                .put(setLoginValue({ name: 'success', value: false }))
                .next()
                .put(reciveErrorRequest())
                .next()
                .isDone();
        });
    });
    describe('watchers', () => {
        it('should run all watchers', () => {
            testSaga(sagas.watcherLogin)
                .next()
                .takeEvery(actionTypes.SEND_LOGIN_REQUEST, sagas.workerLogin)
                .next()
                .isDone();
        });
    });
    describe('fork', () => {
        it('should fork watchers', () => {
            expectSaga(sagas.watcherLogin)
                .put({ type: 'FORKED' })
                .run();
        });
    });
});
