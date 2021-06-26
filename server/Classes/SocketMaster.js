const connection = require('../Controllers/Connector');
const ChatManager = require('./ChatManager');
class SocketMaster extends ChatManager {
    constructor(io) {
        super(connection);
        this.io = io;
        this.connection();
    }
    users = [];
    connection = () => {
        this.io.on('connection', (socket) => {
            console.log('user connected', socket.id);
            socket.on('disconnect', () => {
                this.users = this.users.filter(user => user.socketId !== socket.id)
                this.io.emit('users_online', this.users);
                if (this.users.length === 0) console.log('all offline');
            })
            socket.on('clientInfo', (user) => {
                this.users.push({ ...user, socketId: socket.id })
                this.io.emit('users_online', this.users);
            })
            socket.on('messages', (message) => {
                const { room } = message;
                this.setNewMessage(message);
                this.io.to(room.room_id).emit('messages', message);
            })
            socket.on('join', ({ room }) => socket.join(room.room_id));
        });
    }
}

module.exports = SocketMaster;