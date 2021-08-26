
//stores the active TCP connection onject
let connection;

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function (key) {
  console.log(key)
  if (key === '\u0003') {
    process.exit()
  };

  if (key === '\u0003') {
    process.exit()
  } else if (key === 'w') {
    connection.write("Move: up")
  } else if (key === 'a') {
    connection.write("Move: left") 
  } else if (key === 's') {
    connection.write("Move: down")
  } else if (key === 'd') {
    connection.write("Move: right")
  }

  if (key === 'x') {
    connection.write("Say: WASSAAHHH")
  }
};


module.exports = {
  setupInput
};