//Write a route that extracts data from query string in the GET '/search' URL
//route, e.g. ?results=recent&include_tabs=true and then outputs it back to
//the user in JSON format.

var port = process.argv[2];
var express = require('express');
var app = express();

app.get('/search', function (req, res){
	var result = (req.query);
	if (result){
		res.send(result)
	};
});

app.listen(port);
