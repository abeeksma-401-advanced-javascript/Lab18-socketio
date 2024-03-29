
const fs = require('fs');
const util = require('util');

const eventHub = require('../eventHub');

const read = util.promisify(fs.readFile);
const write = util.promisify(fs.writeFile);


const alterFile = async file => {
  try{
    let data = await read (file);
    eventHub.emit('read', file);
    let text = data.toString().toUpperCase();
    await write(file, Buffer.from(text));
    eventHub.emit('save', file);
  }
  catch(error){
    eventHub.emit('error', error);
  } 
};




module.exports = alterFile; 
