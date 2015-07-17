//Here we will learn how to search for documents but only fetch the fields
//we need.

//Use the parrots collection to find all documents where age
//is greater than the first argument passed to your script.

//The difference from the last lesson will be that we only want the
//name and age properties

//Using console.log, print the documents to stdout.

var targetAge = process.argv[2];
var mongo = require('mongodb').MongoClient;

mongo.connect('mongodb://localhost:27017/learnyoumongo', function (err, db){

	collection = db.collection('parrots');
	collection.find(
		{ 
			
			age: { $gt: Number(targetAge) }

		},
		{	
			_id: false,
			name: true,
			age: true

		}).toArray(function (err, documents){

		console.log(documents);
		db.close();
	})
})