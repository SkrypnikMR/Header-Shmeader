const regExp = require('../Const/regExp')

module.exports = {
    registrationValidation: ({ email, password, firstName, lastName }) => {
        if (!regExp.emailRegExp.test(email)) return { message: 'invalid_email', isValid: false };
        if (!regExp.passwordRegExp.test(password)) return { message: 'invalid_password', isValid: false };
        if (!regExp.firstAndLastNameRegExp.test(firstName)) return { message: 'invalid_firstName', isValid: false };
        if (!regExp.firstAndLastNameRegExp.test(lastName)) return { message: 'invalid_lastName', isValid: false };
        return { message: '', isValid: true };
    },
    loginValidation: ({ email, password }) => {
        if (!regExp.emailRegExp.test(email)) return { message: 'invalid_email', isValid: false };
        if (!regExp.passwordRegExp.test(password)) return { message: 'invalid_password', isValid: false };
        return { message: '', isValid: true };
    },
};
