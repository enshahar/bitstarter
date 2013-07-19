var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

// to make the index.html everytime the request comes in
// var index_file_buf = fs.readFileSync("index.html");

app.get('/', function(request, response) {
  var index_file_buf = fs.readFileSync("index.html");
  response.send(index_file_buf.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
