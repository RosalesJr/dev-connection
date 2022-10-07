'use strict';


module.exports = (socket) => (payload) => {
  console.log('RSVP SENT', payload);
  socket.emit('RSVP', payload);
};