//Write a TCP time server!
//
//Your server should listen to TCP connections on the port provided by the first argument to your program. For each connection you must write the current date & 24 hour time in the format:
//
//    "YYYY-MM-DD hh:mm"
//
//followed by a newline character. Month, day, hour and minute must be zero-filled to 2 integers. For example:
//
//    "2013-07-06 17:42"

var net = require('net')
var listenPort = process.argv[2];



var server = net.createServer(function (socket){
	fullDate = new Date();
	var year = fullDate.getFullYear();
	var month = ('0' + (fullDate.getMonth() + 1)).slice(-2);
	var date = ('0' + fullDate.getDate()).slice(-2);
	var hours = ('0' + fullDate.getHours()).slice(-2);
	var minutes = ('0' + fullDate.getMinutes()).slice(-2);
	var connectionTime = year + '-' + month + '-' + date + ' ' + hours + ':' + minutes + '\n';
	socket.write(connectionTime);
	socket.end();
});

server.listen(listenPort);
