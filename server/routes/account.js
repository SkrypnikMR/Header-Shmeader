const express = require('express');
const router = express.Router();
const connection = require('../Controllers/Connector');
const AccountManager = require('../Classes/AccountManager');
const accounManager = new AccountManager(connection);
const { registration, login } = accounManager;

router.post('/registration', registration);
router.post('/login', login);


module.exports = router;