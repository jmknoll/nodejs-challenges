//Write a server that, when it recieves a GET, reads a file, parses it to JSON,
//and responds with that content to the user.

//The server should respond to any GET that matches the '/books' resource path.
//As always, the port is passed in process.argv[2]. The file to read is passed
//in process.argv[3].

//Respond with:

//    res.json(object)

//Everything should match the '/books' resource path.

var port = process.argv[2];
var fileToRead = process.argv[3];

var fs = require('fs');

var express = require('express');
var app = express();

app.get('/books', function (req, res) {
	fs.readFile(fileToRead, function (err, data) {
		if (err){
			console.error(err);
			return;
		}
		var fileObject = JSON.parse(data);
		res.json(fileObject);
	})
})

app.listen(port);