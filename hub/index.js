'use strict';

const { Server } = require('socket.io');
const PORT = process.env.PORT || 3002;
const server = new Server(PORT);

const connections = server.of('/connections');

connections.on('connection', (socket) => {
  console.log('Socket connected to connections namespace', socket.id);

  socket.onAny((event, payload) => {
    const date = new Date();
    const time = date.toTimeString();
    console.log('EVENT', {event, time, payload});
  });

  socket.on('INVITED', (payload) =>{
    socket.broadcast.emit('INVITED', payload);
  });

  socket.on('RSVP', (payload) =>{
    socket.broadcast.emit('RSVP', payload);
  });
});

