const regExp = require('../Const/regExp')

module.exports = {
    registrationValidation: (req, res, next) => {
        const {email, password, firstName, lastName} = req.body
        if (!regExp.emailRegExp.test(email)) return res.status(400).json({message: 'Incorrect email'})
        if (!regExp.passwordRegExp.test(password)) return res.status(400).json({message: 'Incorrect password'})
        if (!regExp.firstNameRegExp.test(firstName)) return res.status(400).json({message: 'Incorrect firstName'})
        if (!regExp.lastNameRegExp.test(lastName)) return res.status(400).json({message: 'Incorrect lastName'})
        next()
    },
    loginValidation: (req, res, next) => {
        if (!req.body.email || !req.body.password) return res.status(400).json({message: 'Bad request'})
        const {email, password} = req.body
        if (!regExp.emailRegExp.test(email)) return res.status(400).json({message: 'Incorrect email'})
        if (!regExp.passwordRegExp.test(password)) return res.status(400).json({message: 'Incorrect password'})
        next()
    }
}
