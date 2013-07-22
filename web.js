var express = require('express');
var path = require('path');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	var filePath = path.join(__dirname, 'index.html');
    var stat = fs.statSync(filePath);
	
	response.writeHead(200, {
        'Content-Type': 'text/html',
        'Content-Length': stat.size
    });

	var readStream = fs.createReadStream(filePath);
	readStream.pipe(response);
	//console.log(data);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
