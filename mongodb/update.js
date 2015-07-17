//Here we are going to update a document in the users collection.

//Say we have a user defined like:

//    {
//      "name": "Tina",
//      "age": 30,
//      "username": "tinatime"
//    }

//We want to change Tina's age from 30 to 40.

//For the purpose of this lesson, assume that the username property is unique.

var mongo = require('mongodb').MongoClient

mongo.connect('mongodb:localhost:27017/learnyoumongo', function (err, db){
	if (err) throw err
	var collection = db.collection('users');

	collection.update(
		{ name: 'Tina' },
		{ 
			$set: {
				age: 40,
			},
			$currentDate: { lastModified: true } 
		}
	)
})