class SocketMaster {
    constructor(io) {
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
                console.log(message);
                this.io.emit('messages', message);
            })
        });
    }
}

module.exports = SocketMaster;