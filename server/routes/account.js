const express = require('express');
const router = express.Router();
const connection = require('../Controllers/Connector');
const AccountManager = require('../Classes/AccountManager');
const accountManager = new AccountManager(connection);
const { registration, login, update } = accountManager;
const { ACCOUNT } = require('../Const/urls')

router.post(ACCOUNT.REGISTRATION, registration);
router.post(ACCOUNT.LOGIN, login);
router.put(ACCOUNT.UPDATE, update);

module.exports = router;