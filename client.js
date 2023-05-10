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
    
    });
    conn.on("data", (data) => {
      console.log("Data Recieved:");
      conn.write("Name: ATS"); //print initials when connection has been established
    
    });

    

  // interpret incoming data as text

  return conn;
};

// const { myNumber, myString, myFunction } = require("./fileA");

module.exports = { connect };