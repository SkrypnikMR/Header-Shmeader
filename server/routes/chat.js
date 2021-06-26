const express = require('express');
const router = express.Router();
const connection = require('../Controllers/Connector');
const ChatManager = require('../Classes/ChatManager');
const chatManager = new ChatManager(connection);
const { getAllRooms, getAllMessages } = chatManager;

router.get('/rooms', getAllRooms);
router.get('/messages', getAllMessages);

module.exports = router;