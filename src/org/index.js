'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3002/connections');

const Chance = require('chance');
const chance = new Chance();

socket.on('RSVP', (payload) => {
  console.log('RSVP received thanks', payload.invite.name);
});

setInterval(() => {
  const invite = {
    company: chance.company(),
    date: chance.date({string: true}),
    address: chance.address(),
    time: chance.hour(),
    cell: chance.phone(),
    name: chance.name(),
  };
  console.log('New Event, invite sent');
  socket.emit('INVITED', {invite} );
}, 5000);

