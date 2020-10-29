const express = require("express");
const app = express();
const port = 3000;
const db = require("./config/dbconnect");
const passport = require("passport");
const passportJWT = require("./config/passport-jwt-strategy");

// ========================using middlewares and listening to the server========================

app.use(express.urlencoded());

//===========================use express router=================================================
app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log(`error in running the server ${port}`);
  }
  console.log(`server is up and runnig on port :: ${port}`);
});
