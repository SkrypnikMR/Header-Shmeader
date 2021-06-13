import { validation } from './validation';

describe('validation', () => {
    describe('loginValidation', () => {
        it('should be defined', () => {
            expect(validation.loginValidation).toBeDefined();
        });
        it('should be function', () => {
            expect(typeof validation.loginValidation).toBe('function');
        });
        it('should return "Invalid email" ', () => {
            const candidate = {
                email: 'keepcalm312000',
                password: 'asdasdsadsad',
            };
            expect(validation.loginValidation(candidate)).toBe('Invalid email!');
        });
        it('should return "Invalid password" ', () => {
            const candidate = {
                email: 'keepcalm312000@gmail.com',
                password: 'asd',
            };
            expect(validation.loginValidation(candidate)).toBe('Invalid password!');
        });
        it('should return false ', () => {
            const candidate = {
                email: 'keepcalm312000@gmail.com',
                password: 'asdasdsad',
            };
            expect(validation.loginValidation(candidate)).toBe(false);
        });
    });
    describe('registrationValidation', () => {
        it('should be defined', () => {
            expect(validation.registrationValidation).toBeDefined();
        });
        it('should be function', () => {
            expect(typeof validation.registrationValidation).toBe('function');
        });
        it('should return "Invalid email" ', () => {
            const candidate = {
                email: 'keepcalm312000',
                password: 'asdasdsadsad',
                firstName: 'Alexey',
                lastName: 'Rashev',
                confirm: 'asdasdsadsad',
            };
            expect(validation.registrationValidation(candidate)).toBe('Invalid email!');
        });
        it('should return "Invalid password" ', () => {
            const candidate = {
                email: 'keepcalm312000@gmail.com',
                password: 'asd',
                firstName: 'Alexey',
                lastName: 'Rashev',
                confirm: 'asdasdsadsad',
            };
            expect(validation.registrationValidation(candidate)).toBe('Invalid password!');
        });
        it('should return "Invalid First name!" ', () => {
            const candidate = {
                email: 'keepcalm312000@gmail.com',
                password: 'asdasdsad',
                firstName: 'A',
                lastName: 'Rashev',
                confirm: 'asdasdsad',
            };
            expect(validation.registrationValidation(candidate)).toBe('Invalid First name!');
        });
        it('should return "Invalid Last name!" ', () => {
            const candidate = {
                email: 'keepcalm312000@gmail.com',
                password: 'asdasdsad',
                firstName: 'Alexey',
                lastName: 'R',
                confirm: 'asdasdsad',
            };
            expect(validation.registrationValidation(candidate)).toBe('Invalid Last name!');
        });
        it('should return password mismatch ', () => {
            const candidate = {
                email: 'keepcalm312000@gmail.com',
                password: 'asdasdsad',
                firstName: 'Alexey',
                lastName: 'Rashev',
                confirm: 'asdasdsadsad',
            };
            expect(validation.registrationValidation(candidate)).toBe('Password mismatch');
        });
        it('should return false', () => {
            const candidate = {
                email: 'keepcalm312000@gmail.com',
                password: 'asdasdsadsad',
                firstName: 'Alexey',
                lastName: 'Rashev',
                confirm: 'asdasdsadsad',
            };
            expect(validation.registrationValidation(candidate)).toBe(false);
        });
    });
});
