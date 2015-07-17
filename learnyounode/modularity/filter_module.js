module.exports = function(directory, extension, callback){
	var fs = require('fs');
	var path = require('path');

	var filelist = [];
	var i = 0;

	fs.readdir(directory, function (err, list){
		if (err){
			return callback(err)
		}
		list.forEach(function(element, index, array){
			if (path.extname(element) == '.' + extension){
				filelist.push(element);
			}
		})
		return callback(null, filelist);
	})
}