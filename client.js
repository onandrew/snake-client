const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  conn.on('connect', (connect) => {
    console.log('Connection established');
  });
  conn.on('connect', () => {
    conn.write(`Name: AON`);
  });
   // conn.write(`Move: up`);
   conn.on('data', (data) => {
      console.log('Server says: ', data);
      console.log("Idled too long so you have been disconnected");
  });
  // interpret incoming data as text

  conn.setEncoding("utf8");

  return conn;
};

  module.exports = {connect};