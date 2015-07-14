

//DONE WITH AN INVOKED FUNCTION AS A CALLBACK - THIS IS THE NODE WAY?

var fs = require('fs');

var input = process.argv[2]

var lineBreaks = undefined;

function getNewLines(callback){
	fs.readFile(input, 'utf8', function doneReading(err, contents){
		lineBreaks = contents.split('\n')
		callback();
	})
}

function logContents() {
	console.log(lineBreaks.length - 1);
}

getNewLines(logContents);


/*

//DONE WITH MUCH LESS CODE : )

var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function doneReading(err, contents){
	console.log(contents.split('\n').length - 1);
});

*/