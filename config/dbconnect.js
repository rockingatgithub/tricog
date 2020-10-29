const mysql = require("mysql");

// Create a connection to the database
const connection = mysql.createConnection({
  host: "localhost",
  user: "newuser",
  password: "2509@Raja",
  database: "customers",
});

// open the MySQL connection
connection.connect((error) => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
  let sql =
    "CREATE TABLE IF NOT EXISTS testcustomers (id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, first_name varchar(255) NOT NULL, pan_number int(11) NOT NULL UNIQUE, dob DATE NOT NULL, gender varchar(255) NOT NULL, email varchar(255) NOT NULL, profile_image varchar(255) NOT NULL)";

  connection.query(sql, function (err, results) {
    if (err) throw err;
    console.log("Table created");
  });
});

module.exports = connection;
