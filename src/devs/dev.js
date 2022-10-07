'use strict';

const Chance = require('chance');
const chance = new Chance();

const dev = {
  name:chance.name(),
};

module.exports = dev;