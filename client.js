const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({

    host: IP,
    port: PORT 

  });
  conn.setEncoding("utf8");

  // Register a "connect" event handler
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: ATS"); //print initials when connection has been established
  });



  conn.on("data", (data) => {
    console.log("Data Recieved:", data);
  });

  return conn;
};

module.exports = { connect };