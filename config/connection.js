var mysql = require("mysql");
var connection;

//creating connection
// var connection = mysql.createConnection({ // Set connection parameters
//   host: "localhost",
//   user: "root",
//   password: "0118488320613",
//   database: "burgers_db"
// });

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({ // Set local connection parameters
        host: "localhost",
        user: "root",
        password: "password",
        database: "burgers_db"
    });
};

//creating connection
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

//exporting for ORM
module.exports = connection;           