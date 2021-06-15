const regExp = require('../Const/regExp')

module.exports = {
    registrationValidation: (req, res, next) => {
        const { email, password, firstName, lastName } = req.body;
        let answer = { message: '', isValid: true };

        if (!regExp.emailRegExp.test(email) || !email) {
            answer = { message: 'Invalid email', isValid: false };
        }
        if (!regExp.passwordRegExp.test(password) || !password) {
            answer = { message: 'Invalid password', isValid: false };
        }
        if (!regExp.firstNameRegExp.test(firstName) || !firstName) {
            answer = { message: 'Invalid firstName', isValid: false };
        }
        if (!regExp.lastNameRegExp.test(lastName) || !lastName) {
            answer = { message: 'Invalid lastName', isValid: false };
        }
        req.validation = {message: answer.message, isValid: answer.isValid}
        next();
    },
    loginValidation: (req, res, next) => {
        const { email, password } = req.body;
        let answer = { message: '', isValid: true };

        if (!regExp.emailRegExp.test(email) || !email) {
            answer = { message: 'Invalid email', isValid: false };
        }
        if (!regExp.passwordRegExp.test(password) || !password) {
            answer = { message: 'Invalid password', isValid: false };
        }
        req.validation = {message: answer.message, isValid: answer.isValid}
        next();
    },
};
