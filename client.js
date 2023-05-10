const net = require("net");

const connect = function () {
  const conn = net.createConnection({

    host: '165.227.47.243',
    port: '50541'

  });
  conn.setEncoding("utf8");

  // Register a "connect" event handler
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: ATS"); //print initials when connection has been established

    
    setTimeout(() => {
      conn.write("Move: up");
    }, 1000); // sends the "Move: up" command after 1 second
    
    setTimeout(() => {
      conn.write("Move: down");
    }, 2000); // sends the "Move: down" command after 2 seconds
    
    setTimeout(() => {
      conn.write("Move: left");
    }, 3000); // sends the "Move: left" command after 3 seconds
    
    setTimeout(() => {
      conn.write("Move: right");
    }, 4000); // sends the "Move: right" command after 4 seconds
    
  });



  conn.on("data", (data) => {
    console.log("Data Recieved:", data);
  });

  return conn;
};

module.exports = { connect };