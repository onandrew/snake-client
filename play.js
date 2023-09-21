const net = require("net");

// establishes a connection with the game server
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

console.log("Connecting ...");
connect();