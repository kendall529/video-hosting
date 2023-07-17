const express = require('express');
const exphbs = require("express-handlebars");
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

app.set('view engine', )

server.listen(3001);