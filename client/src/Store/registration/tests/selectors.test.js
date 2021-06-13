import * as selectors from '../selectors';

describe('selectors', () => {
    describe('selectors.registrationStore', () => {
        it('toBe defined', () => {
            expect(selectors.registrationStore).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof selectors.registrationStore).toBe('function');
        });
        it('should return value', () => {
            const state = {
                registration: {
                    email: '',
                    password: '',
                    firstName: '',
                    lastName: '',
                },
            };
            expect(selectors.registrationStore(state)).toEqual(state.registration);
        });
    });
});
