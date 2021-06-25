import { expectSaga, testSaga } from 'redux-saga-test-plan';
import * as sagas from '../saga';
import { newMessage } from '../selectors';
import { userInfo } from '../../user/selectors';
import { actionTypes } from '../actionTypes';

describe('chatSaga', () => {
    describe('workerLogin', () => {
        let action;
        it('should call sendMessage ', () => {
            action = { type: actionTypes.SEND_NEW_MESSAGE };
            testSaga(sagas.sendMessage, action)
                .next()
                .select(userInfo)
                .next({ email: 'SkipnikMRW@gmail.com' })
                .select(newMessage)
                .next({
                    author: 'SkipnikMRW@gmail.com',
                    messageText: 'kek',
                    messageTime: '123123',
                })
                .isDone();
        });
        it('should call connectionSaga ', () => {
            action = { type: actionTypes.CONNECT };
            const channel = jest.fn();
            testSaga(sagas.connectionSaga, action)
                .next()
                .select(userInfo)
                .next({
                    email: 'SkipnikMRW@gmail.com',
                    id: 1,
                    firstName: 'Max',
                    lastName: 'Skripnik',
                    socketID: '21321732137ygsudgasdasd',
                })
                .call(sagas.connect, {
                    email: 'SkipnikMRW@gmail.com',
                    id: 1,
                    firstName: 'Max',
                    lastName: 'Skripnik',
                    socketID: '21321732137ygsudgasdasd',
                })
                .next({ socket: 'eto tipa Socket' })
                .call(sagas.createSocketChannel, { socket: 'eto tipa Socket' })
                .next(channel)
                .take(channel)
                .next({ someChanelfunc: 'da da ya func' })
                .put({ someChanelfunc: 'da da ya func' })
                .next();
        });
        describe('fork', () => {
            it('should fork watchers', () => {
                expectSaga(sagas.watcherUserOperations)
                    .put({ type: 'FORKED' })
                    .run();
            });
        });
    });
});
