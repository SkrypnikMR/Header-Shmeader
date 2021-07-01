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
                const { room_id } = message;
                this.setNewMessage(message);
                this.io.to(room_id).emit('messages', message);
            })
            socket.on('join', (rooms) => rooms.forEach(room => socket.join(room.room_id)));
            socket.on('new_room', async ({ id, ...newRoomInfo }) => {
                try {
                    const answer = await this.setNewRoom({ ...newRoomInfo, id });
                    if (answer.error) return this.io.to(id).emit('error', { error: 'exists_error' })
                    this.io.to(id).emit('join_new_room', { ...answer, unreadCount: 0 });
                    const { id: room_id } = answer;
                    socket.join(room_id);
                }
                catch (e) { this.io.to(id).emit('error', { error: 'server_error' }) }
            })
        });
    }
}

module.exports = SocketMaster;