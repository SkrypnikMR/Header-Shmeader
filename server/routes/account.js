const express = require('express');
const router = express.Router();
const connection = require('../Controllers/Connector');
const AccountManager = require('../Classes/AccountManager');
const accountManager = new AccountManager(connection);
const { registration, login } = accountManager;
const validation = require('../helpers/validation');
const { registrationValidation, loginValidation } = validation

router.post('/registration', registrationValidation, registration);
router.post('/login', loginValidation, login);


module.exports = router;