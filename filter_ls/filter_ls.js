var fs = require('fs');
var path = require('path');

targetDir = process.argv[2];
targetExt = process.argv[3];
realTargetExt = '.' + targetExt;


fs.readdir(targetDir, function returnFiltered(err, list){
	for ( var i = 0; i < list.length; i++ ){
		if ( path.extname(list[i]) == realTargetExt ){
			console.log(list[i]);
		}
	}
});