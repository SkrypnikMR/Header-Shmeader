require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, { cors: "*" });
const SocketMaster = require('./Classes/SocketMaster');
new SocketMaster(io);
const { API } = require('./Const/urls');
const account = require('./routes/account');
const chat = require('./routes/chat');
const PORT = process.env.PORT || 1000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(API.ACCOUNT, account);
app.use(API.CHAT, chat);

server.listen(PORT, () => console.log(`app start on port:${PORT}`));
