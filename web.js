var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  fs.readFileSync("index.html", function(err, data) {
    if(!err) {
      var buffer = new Buffer(1024);
      buffer.write(data);
      response.send(buffer.toString());
    } else {
      response.send("Cannot read index.html.");
    }
  });
  //response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
