//Connect to MongoDB on port 27017.
//You should connect to the database named learnyoumongo and insert
//a document into the docs collection.

//The document should be a json document with the following properties:

//  * `firstName`
//  * `lastName`

//firstName will be passed as the first argument to the lesson.

//lastName will be passed as the second argument to the lesson.

//Use console.log to print out the object used to create the document.

//Make sure you use JSON.stringify convert it to JSON.

var firstName = process.argv[2];
var lastName = process.argv[3];
var mongo = require('mongodb').MongoClient;
var nameObject = {
		firstName: firstName,
		lastName: lastName
	}

mongo.connect('mongodb://localhost:27017/learnyoumongo', function (err, db){
	if (err) throw err
	var collection = db.collection('docs');

	collection.insert(nameObject, function (err, data) {
		if (err) throw err
		console.log(JSON.stringify(nameObject))
		db.close()
	})
})