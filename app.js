'use strict';

require('./network-logger');

const alterFile = require('./alterFiles/read-write');
const eventHub = require('./eventHub');

let file = process.argv.slice(2).shift();
alterFile(file);
