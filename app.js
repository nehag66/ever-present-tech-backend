var express = require("express");
var app = express();
const bodyParser = require("body-parser");

var fs = require("fs");

app.use(bodyParser.json());

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
  });
});

// Create a server to listen at port 8080
var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("REST API demo app listening at http://%s:%s", host, port);
});
