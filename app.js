var express = require("express"); // requre the express framework
var app = express();
const bodyParser = require("body-parser");

var fs = require("fs"); //require file system object

app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-type, Authorization");
  next();
});

// Endpoint to Get a list of users
app.get("/getClients", function (req, res) {
  fs.readFile(__dirname + "/" + "db.json", "utf8", function (err, data) {
    //console.log(data);
    res.send(data);
    // res.json(data);
  });
});

// app.get("/", (req, res, next) => {
//   // Checking the header of the authorization
//   var authheader = req.headers.authorization;
//   console.log(authheader);
//   if (!authheader) {
//     var err = new Error("You are not authenticated");
//     // Set the header for the response
//     res.setHeader("WWW-Authenticate", "Basic");
//     err.status = 401;
//     return next(err);
//   }
//   console.log(authheader);

//   // Decrypt the user name and the password
//   var auth = new Buffer.from(authheader.split(" ")[1], "base64")
//     .toString()
//     .split(":");
//   var user = auth[0];
//   var pass = auth[1];

//   // Checking the details
//   if (user == "admin" && pass == "password") {
//     res.send("Welcome you are authorized");
//   } else {
//     var err = new Error("You are not authenticated!");
//     res.setHeader("WWW-Authenticate", "Basic");
//     err.status = 401;
//     return next(err);
//   }
// });

// Create a server to listen at port 8080
var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("REST API demo app listening at http://%s:%s", host, port);
});
