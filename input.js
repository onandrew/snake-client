
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (data) {
  if (key === '\u0003') {
    process.exit();
  };

  stdin.on('data', (data) => {
    console.log("Exiting program");
  });// your code here
};

module.exports = {setupInput};