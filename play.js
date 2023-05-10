const { connect }  = require("./client.js");
const { setupInput } = require("./input");


// establishes a connection with the game server

console.log("Connecting ...");



let conn = connect();

setupInput(conn);
