const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "localHost",
    port: 50541,
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