const regExp = require('../Const/regExp')

module.exports = {
    registrationValidation: ({ email, password, firstName, lastName }) => {
        if (!regExp.emailRegExp.test(email)) return { message: 'Invalid email', isValid: false };
        if (!regExp.passwordRegExp.test(password)) return { message: 'Invalid password', isValid: false };
        if (!regExp.firstNameRegExp.test(firstName)) return { message: 'Invalid firstName', isValid: false };
        if (!regExp.lastNameRegExp.test(lastName)) return { message: 'Invalid lastName', isValid: false };
        return { message: '', isValid: true };
    },
    loginValidation: ({ email, password }) => {
        if (!regExp.emailRegExp.test(email)) return { message: 'Invalid email', isValid: false };
        if (!regExp.passwordRegExp.test(password)) return { message: 'Invalid password', isValid: false };
        return { message: '', isValid: true };
    },
};
