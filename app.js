//Include exported pool connection
//from database.js file
const db = require("./database");

// 'users' name of table 
// execute method on 'db' object
db.execute("SELECT * FROM users")
  .then(result => {
    // result[0] contains retrived data
    // result[1] contains database realted data
    console.log(result[0]);
  })    
  .catch((err) => {
      console.log(err);
});

