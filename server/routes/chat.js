const express = require('express');
const router = express.Router();
const connection = require('../Controllers/Connector');
const ChatManager = require('../Classes/ChatManager');
const chatManager = new ChatManager(connection);
const { getAllRooms } = chatManager;

router.get('/rooms', getAllRooms);

module.exports = router;