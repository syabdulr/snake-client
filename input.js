let connection; // variable to store connection object

// function to handle user input
const handleUserInput = function (key) {
  if (key === '\u0003') { // if ctrl+c is pressed
    console.log("Thanks for playing, bye!");
    process.exit(); // exit the process
  } else if (key === 'w') { // if 'w' is pressed
    connection.write("Move: up"); // send 'Move: up' command to server
  } else if (key === 'a') { // if 'a' is pressed
    connection.write("Move: left"); // send 'Move: left' command to server
  } else if (key === 's') { // if 's' is pressed
    connection.write("Move: down"); // send 'Move: down' command to server
  } else if (key === 'd') { // if 'd' is pressed
    connection.write("Move: right"); // send 'Move: right' command to server
  } else if (key === 'p') {
    connection.write("Say: I am the best snake!");
  }

}

// function to set up input from standard input (keyboard)
const setupInput = function (conn) {
  connection = conn; // assign the passed in connection object to our variable
  const stdin = process.stdin; // get the standard input object
  stdin.setRawMode(true); // set the input mode to raw (allows us to capture individual key presses)
  stdin.setEncoding("utf8"); // set the encoding to utf8
  stdin.resume(); // resume standard input (prevents it from being closed by default)

  // register the handleUserInput function as the callback for standard input data events
  stdin.on("data", handleUserInput);

  return stdin; // return the standard input object
};

// export the setupInput function for use in other modules
module.exports = { setupInput };
