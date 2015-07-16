var targetAge = process.argv[2];
var mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/learnyoumongo', function (err, db){
	
	collection = db.collection('parrots');
	collection.find({
		
		age : { $gt: Number(targetAge)}
	
	}).toArray(function (err, documents){
		
		console.log(documents);
		db.close()
	})

})