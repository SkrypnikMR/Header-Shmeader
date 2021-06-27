const express = require('express');
const router = express.Router();
const connection = require('../Controllers/Connector');
const ChatManager = require('../Classes/ChatManager');
const chatManager = new ChatManager(connection);
const { getAllRooms, getAllMessages } = chatManager;
const { CHAT } = require('../Const/urls');

router.get(CHAT.ROOMS, getAllRooms);
router.get(CHAT.MESSAGES, getAllMessages);

module.exports = router;