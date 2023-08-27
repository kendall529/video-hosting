const express = require('express');
const socket = require('socket.io');

const PORT = 4000;

const app = express();

const server = app.listen(PORT, () => {
    console.log(`server is listening at port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});

const io = socket(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

io.on('connection', (socket) => {
    socket.emit('connection', null);
    console.log('New user connected');
    console.log('Socket ID :>>', socket.id);
    console.log('Total connected clients :>>', io.engine.clientsCount);
});
