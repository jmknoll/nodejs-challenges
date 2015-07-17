//This problem is the same as the previous problem (HTTP COLLECT) in that you need to use http.get(). However, this time you will be provided with three URLs as the first three command-line arguments.

//You must collect the complete content provided to you by each of the URLs and print it to the console (stdout). You don't need to print out the length, just the data as a String; one line per URL. The catch is that you must print them out in the same order as the URLs are provided to you as command-line arguments.

var http = require('http')

var targetUrl1 = process.argv[2];
var targetUrl2 = process.argv[3];
var targetUrl3 = process.argv[4];

var data1 = '';
var data2 = '';
var data3 = '';

var dataSet = '';

var index = 0;


getAllData = function(callback){

	http.get(targetUrl1, function (res){
		res.setEncoding('utf8');
		res.on('error', console.error)
		res.on('data', function (data){
			data1 += data;
		})
		res.on('end', function(){
			index += 1
			callback();
		})
	})

	http.get(targetUrl2, function (res){
		res.setEncoding('utf8');
		res.on('error', console.error)
		res.on('data', function (data){
			data2 += data;

		})
		res.on('end', function(){
			index += 1;
			callback();
		})
	})

	http.get(targetUrl3, function (res){
		res.setEncoding('utf8');
		res.on('error', console.error)
		res.on('data', function (data){
			data3 += data;
		})
		res.on('end', function(){
			index += 1;
			callback();
		})
	})

	//console.log(dataSet);
}

publishData = function(){
	if (index == 3){
		console.log(data1);
		console.log(data2);
		console.log(data3);
	}
}

getAllData(publishData);

