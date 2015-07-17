var input = process.argv;
//console.log(input);

var initVal = 0;

for (var i = 0; i < input.length; i++){
	input[i] = parseInt(input[i])
	
	if ( !isNaN(input[i]) ) {
		initVal = initVal + input[i]
	}
}

console.log(initVal);