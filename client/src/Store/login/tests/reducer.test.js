import { reducer, initialState } from '../reducer';
import { setLoginValue, clearLoginInputs } from '../actions';

describe('loginReducer', () => {
    it('SET_VALUE', () => {
        const testValue = 'testValue';
        const testName = 'email';
        expect(reducer(initialState, setLoginValue({ name: `${testName}`, value: `${testValue}` })))
            .toEqual({ ...initialState, [testName]: testValue });
    });
    it('CLEAR_INPUTS_VALUES', () => {
        expect(reducer(initialState, clearLoginInputs()))
            .toEqual({
                ...initialState,
                email: '',
                password: '',
            });
    });
    it('default', () => expect(reducer(initialState, {})).toEqual(initialState));
});
