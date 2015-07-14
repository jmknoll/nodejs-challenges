var filterFiles = require('./filter_module.js');

var dir = process.argv[2];
var ext = process.argv[3];

//console.log(filterFiles);
filterFiles(dir, ext, function(err, data) {
	if (err) {
		console.log(err);
		return
	}
	data.forEach(function(element, index, array){
		console.log(element)
	})
});