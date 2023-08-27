import socketClient from 'socket.io-client';

const SERVER = 'http://localhost:4000';

let socket;

export const connectWithWebSocket = () => {
    socket = socketClient(SERVER);

    socket.on('connection', () => {
        console.log('successfully connected with websock server');
        console.log(socket.id);
    });
};