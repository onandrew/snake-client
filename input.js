let connection;
const message = "Say: ";
const helloMessage = "Hello";
const { MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY} = require('./constants');

const handleUserInput = function (key) {
  conn = connection;
  if (key === '\u0003') {
    process.exit();
  }
  else if (key === MOVE_UP_KEY) {
    conn.write('Move: up');
  } else if (key === MOVE_LEFT_KEY) {
    conn.write('Move: left');
  } else if (key === MOVE_DOWN_KEY) {
    conn.write('Move: down');
  } else if (key === MOVE_RIGHT_KEY) {
    conn.write('Move: right');
  } else if (key === 'h') {
    conn.write(message + helloMessage);
  }
  };

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', (data) => {
    handleUserInput(data);
  });
return stdin;
};

module.exports = {setupInput};