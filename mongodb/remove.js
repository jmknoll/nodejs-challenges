//This lesson involves removing a document with the given _id.

//The collection name will be passed as the first argument to your script.

//The _id will be passed as the second argument to your script.

var targetCollection = process.argv[2];
var targetId = process.argv[3];

var mongo = require('mongo').MongoClient();

mongo.connect('mongodb://localhost:27017/learnyoumongo', function (err, db) {
	if (err) throw err

	var collection = db.collection(targetCollection);
	collection.remove(
		{
			_id: targetId
		}, function (err, data){
			db.close();
		}
	)
})