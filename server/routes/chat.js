const express = require('express');
const router = express.Router();
const connection = require('../Controllers/Connector');
const ChatManager = require('../Classes/ChatManager');
const chatManager = new ChatManager(connection);
const { getAllRooms, getAllMessages, readAllMessages, getAllUsers } = chatManager;
const { CHAT } = require('../Const/urls');

router.get(CHAT.ROOMS, getAllRooms);
router.get(CHAT.MESSAGES, getAllMessages);
router.post(CHAT.READ_ALL_MESSAGES, readAllMessages);
router.get(CHAT.USERS, getAllUsers);

module.exports = router;