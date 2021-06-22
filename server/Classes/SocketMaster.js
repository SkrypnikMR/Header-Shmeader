class SocketMaster {
    constructor(io) {
        this.listenConnection(io);
    }
    listenConnection = (io) => {
        io.on('connection', (socket) => {
            console.log('user connected');
            //all logic for connection
            this.listenDisconnection(socket);
        });
    }
    listenDisconnection = (socket) => {
        socket.on('disconnect', () => {
            console.log('disconnect')
            // logic for disconnection
        })
    }
}

module.exports = SocketMaster;