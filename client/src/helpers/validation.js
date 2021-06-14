import { regExp } from '../constants/regExp';

export const validation = {
    registrationValidation: ({ email, password, confirm, firstName, lastName }) => {
        let answer = { message: '', isValid: true };

        if (!regExp.emailRegExp.test(email) || !email) answer = { message: 'Invalid email', isValid: false };
        if (!regExp.passwordRegExp.test(password) || !password) answer = { message: 'Invalid password', isValid: false };
        if (!regExp.firstNameRegExp.test(firstName) || !firstName) answer = { message: 'Invalid firstName', isValid: false };
        if (!regExp.lastNameRegExp.test(lastName) || !lastName) answer = { message: 'Invalid lastName', isValid: false };
        if (password !== confirm) answer = { message: 'Password mismatch', isValid: false };
        return answer;

    },
    loginValidation: ({ email, password }) => {
        let answer = { message: '', isValid: true };

        if (!regExp.emailRegExp.test(email) || !email) answer = { message: 'Invalid email', isValid: false };
        if (!regExp.passwordRegExp.test(password) || !password) answer = { message: 'Invalid password', isValid: false };
        return answer;
    },
};
