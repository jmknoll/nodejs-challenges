var fs = require('fs');

var input = fs.readFileSync(process.argv[2]);

inputString = input.toString();

splitByNewLines = inputString.split('\n');

console.log( splitByNewLines.length - 1 );