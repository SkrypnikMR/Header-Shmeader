import { regExp } from '../constants/regExp';

export const validation = {
    registrationValidation: ({ email, password, confirm, firstName, lastName }) => {
        if (!regExp.emailRegExp.test(email)) return 'Invalid email!';
        if (!regExp.passwordRegExp.test(password)) return 'Invalid password!';
        if (!regExp.firstNameRegExp.test(firstName)) return 'Invalid First name!';
        if (!regExp.lastNameRegExp.test(lastName)) return 'Invalid Last name!';
        if (password !== confirm) return 'Password mismatch';
        return false;
    },

    loginValidation: ({ email, password}) => {
        if (!regExp.emailRegExp.test(email)) return 'Invalid email!';
        if (!regExp.passwordRegExp.test(password)) return 'Invalid password!';
        return false;
    },
};
