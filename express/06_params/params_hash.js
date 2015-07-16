//Create an Express.js server that processes PUT '/message/:id' requests
//and produces an SHA1 hash of the current date with the id.
//
//For instance, if the server recieves
//
//    PUT /message/526aa677a8ceb64569c9d4fb
//
//it will respond with a hash of the current date (as a string) and the id.

var express = require('express');
var app = express();

var port = process.argv[2];

app.put('/message/:id', function (req, res) {
	console.log('listening on port ' + port);
	//console.log(req.params.id);
	var result = require('crypto')
			.createHash('sha1')
			.update(new Date().toDateString() + req.params.id)
			.digest('hex');
	if (result) {
		res.send(result)
	};
});

app.listen(port);