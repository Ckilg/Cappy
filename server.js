const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

users = [];

app.use(express.static(__dirname + '/app'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + 'app/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('sendUsername', (res) => {
    console.log('username logged in: ' + res);
    socket.username = res;
    users.push(socket.username);
  })

  socket.on('answer', (question, bool) => {
    console.log(socket.username + ' said ' + bool + ' on ' + question);
    socket.broadcast.emit('pantsOn', bool);
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});