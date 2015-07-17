//Write an HTTP server that serves the same text file for each request it receives.
//
//Your server should listen on the port provided by the first argument to your program.
//
//You will be provided with the location of the file to serve as the second command-line argument. You must use the fs.createReadStream() method to stream the file contents to the response.

// modules
var fs = require('fs');
var http = require('http');

// variables
var listenPort = process.argv[2];
var serveThisFile = process.argv[3];

server = http.createServer(function (request, response){
	response.writeHead(200, { 'content-type': 'text/plain' });
	
	fs.createReadStream(serveThisFile).pipe(response);
});

server.listen(Number(listenPort));