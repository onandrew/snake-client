const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "localHost",
    port: 50541,
  });

  conn.on('connect', (connect) => {
    console.log('Connection established');
  });

  conn.on('connect', (connect) => {
    conn.write(`Name: AON`);
  });
  // interpret incoming data as text
  conn.on("data", (data) => {
    console.log("Idled too long so you have been disconnected");
  });

  conn.setEncoding("utf8");

  return conn;
};

  module.exports = {connect, net};