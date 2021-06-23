class SocketMaster {
    constructor(io) {
        this.listenConnection(io);
    }
    users = [];
    listenConnection = (io) => {
        io.on('connection', (socket) => {
            console.log('user connected', socket.id);
            this.listenOnlineUsers(socket);
            this.listenDisconnection(socket);
        });
    }
    listenDisconnection = (socket) => {
        socket.on('disconnect', () => {
            this.users = this.users.filter(user => user.socketId !== socket.id)
        })
    }
    listenOnlineUsers = (socket) => {
        socket.on('clientInfo', (user) => {
            this.users.push({ ...user, socketId: socket.id })
            socket.emit('users_online', this.users);
        })
    }
}

module.exports = SocketMaster;