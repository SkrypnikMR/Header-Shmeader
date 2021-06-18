import { regExp } from '../constants/regExp';

export const validation = {
    registrationValidation: ({ email, password, confirm, firstName, lastName }) => {
        if (!regExp.emailRegExp.test(email) || !email) return { message: 'Invalid email', isValid: false };
        if (!regExp.passwordRegExp.test(password) || !password) return { message: 'Invalid password', isValid: false };
        if (password !== confirm) return { message: 'Password mismatch', isValid: false };
        if (!regExp.firstAndLastNameRegExp.test(firstName) || !firstName) return { message: 'Invalid first Name', isValid: false };
        if (!regExp.firstAndLastNameRegExp.test(lastName) || !lastName) return { message: 'Invalid last Name', isValid: false };
        return { message: '', isValid: true };
    },
    loginValidation: ({ email, password }) => {
        if (!regExp.emailRegExp.test(email) || !email) return { message: 'Invalid email', isValid: false };
        if (!regExp.passwordRegExp.test(password) || !password) return { message: 'Invalid password', isValid: false };
        return { message: '', isValid: true };
    },
};
