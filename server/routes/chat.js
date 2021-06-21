const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const io = req.io;
    io.on('connection', (socket) => {
        console.log('a user connected');
    });
    res.sendStatus(103);
});

module.exports = router;