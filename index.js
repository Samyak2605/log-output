const { v4: uuidv4 } = require('uuid');

const id = uuidv4();

setInterval(() => {
  console.log(`${new Date().toISOString()}: ${id}`);
}, 5000);
