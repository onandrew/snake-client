const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "localHost",
    port: 50541,
  });

  // interpret incoming data as text
  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("you ded cuz you idled");
  });

  conn.setEncoding("utf8");

  return conn;
};

  module.exports = {connect, net};