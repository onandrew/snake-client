const { connect, net } = require('./client');
console.log("Connecting ...");
connect();
conn.on('connect', (connect) => {
  conn.write(`Name: AON`);
});