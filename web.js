var express = require('express');
var path = require('path');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	var filePath = path.join(__dirname, 'index.html');
    var stat = fileSystem.statSync(filePath);
	
	response.writeHead(200, {
        'Content-Type': 'text/text',
        'Content-Length': stat.size
    });

	var readStream = fileSystem.createReadStream(filePath);
	readStream.pipe(response);
	//console.log(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
