//Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument. Collect all data from the server (not just the first "data" event) and then write two lines to the console (stdout).
//The first line you write should just be an integer representing the number of characters received from the server. The second line should contain the complete String of characters sent by the server.

// THE HARD WAY - FROM SCRATCH

/*

var http = require('http');

targetUrl = process.argv[2];

var dataObject = '';

http.get(targetUrl, function( res ){
	res.on('error', console.error);
	res.setEncoding('utf8');
	res.on('data', function(data){
		dataObject += data;
	});
	res.on('end', function(){
		console.log(dataObject.length);
		console.log(dataObject);
	})
});

*/

// THE EASY WAY - WITH AN EXTERNAL PACKAGE 

var http = require('http');
var concatStream = require('concat-stream');

var targetUrl = process.argv[2];

http.get(targetUrl, function (res) {
	res.pipe(concatStream (function (err, data, end) {
		if (err){
			return console.error(err)
		}
		data = data.toString();
		console.log(data.length);
		console.log(data);
	}))
})