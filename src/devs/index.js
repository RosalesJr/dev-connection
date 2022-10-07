'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3002/connections');
const createHandleRsvp = require('./rsvp');
const handleRsvp = createHandleRsvp(socket);
socket.on('INVITED', handleRsvp);
