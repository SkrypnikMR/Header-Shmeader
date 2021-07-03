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
                console.log('disconnect')
                this.users = this.users.filter(user => user.socketId !== socket.id)
                this.io.emit('users_online', this.users);
                if (this.users.length === 0) console.log('all offline');
            })
            socket.on('clientInfo', (user) => {
                this.users.push({ ...user, socketId: socket.id })
                this.io.emit('users_online', this.users);
            })
            socket.on('messages', (message) => {
                const { room_id } = message;
                this.setNewMessage(message);
                this.io.to(room_id).emit('messages', message);
            })
            socket.on('join', (rooms) => {
                rooms.forEach(room => socket.join(room.room_id));
            });
            socket.on('set_new_room', ({ room, newRoomUsers }) => {
                this.users.forEach((user) => {
                    if (newRoomUsers.includes(user.id)) {
                        this.io.of('/').sockets.get(user.socketId).join(room.room_id);
                        this.io.to(user.socketId).emit('join_new_room', { ...room, unreadCount: 0 })
                    }
                })
                this.setNewRoomForUsers(room, newRoomUsers);
            })
            socket.on('new_room', async ({ id, ...newRoomInfo }) => {
                try {
                    const answer = await this.setNewRoom({ ...newRoomInfo, id });
                    this.users.forEach(user => {
                        if (user.id === id) {
                            if (answer.error) return this.io.to(user.socketId).emit('error', { error: 'exists_error' })
                            this.io.to(user.socketId).emit('join_new_room', { ...answer, unreadCount: 0 });
                            const { room_id } = answer;
                            this.io.of('/').sockets.get(user.socketId).join(room_id);
                        }
                    })
                }
                catch (e) {
                    this.users.forEach(user => {
                        if (user.id === id) {
                            this.io.to(user.socketId).emit('error', { error: 'server_error' })
                        }
                    })
                }
            })
        });
    }
}

module.exports = SocketMaster;