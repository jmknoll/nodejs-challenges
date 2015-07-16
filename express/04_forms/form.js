//Write a route ('/form') that processes HTML form input
//(<form><input name="str"/></form>) and prints backwards the str value.

var express = require('express');
var app = express();

var bodyparser = require('body-parser');

var port = process.argv[2];

app.use(bodyparser.urlencoded({ extended: false }));

app.post('/form', function (req, res) {
	console.log('listening on port ' + port)
	var result = req.body.str.split('').reverse().join('');
	if (result){
		res.send(result)
	};
});


app.listen(port);