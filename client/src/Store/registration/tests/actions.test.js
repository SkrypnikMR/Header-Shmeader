import * as actions from '../actions';
import { actionTypes } from '../actionTypes';

describe('registration actions', () => {
    describe('actions.setRegistrationValue', () => {
        it('toBe defined', () => {
            expect(actions.setRegistrationValue).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof actions.setRegistrationValue).toBe('function');
        });
        it('should return value', () => {
            const payload = { email: 'emailValue' };
            expect(actions.setRegistrationValue(payload)).toEqual({ type: actionTypes.SET_VALUE, payload });
        });
    });
    describe('actions.sendRegistrationRequest', () => {
        it('toBe defined', () => {
            expect(actions.sendRegistrationRequest).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof actions.sendRegistrationRequest).toBe('function');
        });
        it('should return value', () => {
            const payload = {
                lastName: 'Scr',
                firstName: 'Max',
                email: 'emailValue',
                password: 'somePassword',
            };
            expect(actions.sendRegistrationRequest(payload))
                .toEqual({ type: actionTypes.SEND_REGISTRATION_REQUEST, payload });
        });
    });
    describe('actions.clearRegistrationInputs', () => {
        it('toBe defined', () => {
            expect(actions.clearRegistrationInputs).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof actions.clearRegistrationInputs).toBe('function');
        });
        it('should return value', () => {
            expect(actions.clearRegistrationInputs())
                .toEqual({ type: actionTypes.CLEAR_INPUTS_VALUES });
        });
    });
});
