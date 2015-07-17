//Write an HTTP server that serves JSON data when it receives a GET request to the path '/api/parsetime'. Expect the request to contain a query string with a key 'iso' and an ISO-format time as the value.
//
//For example:
//
//  /api/parsetime?iso=2013-08-10T12:10:15.474Z
//
//The JSON response should contain only 'hour', 'minute' and 'second' properties. For example:
//
//    {
//      "hour": 14,
//      "minute": 23,
//      "second": 15
//    }
//
//Add second endpoint for the path '/api/unixtime' which accepts the same query string but returns UNIX epoch time in milliseconds (the number of milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'. For example:
//
//    { "unixtime": 1376136615474 }
//
//Your server should listen on the port provided by the first argument to your program.


// modules

var http = require('http');
var url = require('url');


// variables

var listenPort = process.argv[2];


// functions

renderDateObject = function(isoDate){
	var dateString = new Date(isoDate);
	var fullTime = {
		'hour': dateString.getHours(),
		'minute': dateString.getMinutes(),
		'second': dateString.getSeconds()
	}
	return fullTime;	
}

renderUnixTime = function(unixTimeReq){
	var unixDateObject = new Date(unixTimeReq);
	var milliseconds = unixDateObject.getTime();
	var unixTimeObject = {
		'unixtime': milliseconds
	};
	return unixTimeObject;
};

// server

var server = http.createServer(function (request, response){
	
	// being a good citizen
	console.log('listening on port ' + listenPort);
	response.writeHead(200, { 'Content-Type': 'application/json' })

	var reqData = url.parse(request.url, true);
	var result;
	
	if ( reqData.pathname === '/api/parsetime' ){
		var iso = reqData.query.iso
		dateObject = renderDateObject(iso);
		result = JSON.stringify(dateObject);

	}

	else if ( reqData.pathname === '/api/unixtime'){
		var unixTimeReq = reqData.query.iso
		unixTimeObject = renderUnixTime(unixTimeReq)
		result = JSON.stringify(unixTimeObject);
	}

	if (result) {
		response.end(result)
	} else {
		response.writeHead(404)
		response.end	
	}

});

server.listen(listenPort);