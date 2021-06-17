const express = require('express');
const router = express.Router();
const connection = require('../Controllers/Connector');
const AccountManager = require('../Classes/AccountManager');
const accountManager = new AccountManager(connection);
const { registration, login } = accountManager;

router.post('/registration', registration);
router.post('/login', login);


module.exports = router;