import { reducer, initialState } from '../reducer';
import { setRegistrationValue, clearRegistrationInputs } from '../actions';

describe('registrationReducer', () => {
    it('SET_VALUE', () => {
        const testValue = 'testValue';
        const testName = 'email';
        expect(reducer(initialState, setRegistrationValue({ name: `${testName}`, value: `${testValue}` })))
            .toEqual({ ...initialState, [testName]: testValue });
    });
    it('CLEAR_INPUTS_VALUES', () => {
        expect(reducer(initialState, clearRegistrationInputs()))
            .toEqual({
                ...initialState,
                email: '',
                password: '',
                confirm: '',
                firstName: '',
                lastName: '',
            });
    });
    it('default', () => expect(reducer(initialState, {})).toEqual(initialState));
});
