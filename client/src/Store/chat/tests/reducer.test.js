import { reducer, initialState } from '../reducer';
import { putMessages, putOnlineUsers, setValue } from '../actions';

describe('userReducer', () => {
    it('SET_VALUE', () => {
        const testValue = 'themeMode';
        const testName = 'dark';
        expect(reducer(initialState, setValue({ name: `${testName}`, value: `${testValue}` })))
            .toEqual({ ...initialState, [testName]: testValue });
    });
    it('PUT_ONLINE_USERS', () => {
        const newUser = [{
            id: 1,
            email: 'skripnikMRW@gmai.com',
            firstName: 'Max',
            lastName: 'Skripnik',
        }];
        expect(reducer(initialState, putOnlineUsers(newUser)))
            .toEqual({
                ...initialState,
                onlineUsers:
                    newUser,
            });
    });
    it('PUT_MESSAGES', () => {
        const newMessage = {
            author: 'skripnikMRW@gmai.com',
            messageText: 'kek',
            messageTime: '12321312321',
        };
        const expectedArray = [newMessage];
        expect(reducer(initialState, putMessages(newMessage)))
            .toEqual({
                ...initialState,
                messages:
                    expectedArray,
            });
    });
    it('default', () => expect(reducer(initialState, {})).toEqual(initialState));
});
