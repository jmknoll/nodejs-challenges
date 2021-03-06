//Your solution should listen on the port supplied by process.argv[2] for a
//GET requests, one of which will be for main.css, which should be
//automatically generated by your Stylus middleware. index.html and main.styl
//can be found in process.argv[3] (they are in the same directory).

var express = require('express');

var port = process.argv[2];
var index = process.argv[3];

var app = express();

app.use(express.static(index || path.join(__dirname, 'public')));
app.use(require('stylus').middleware( 'path/to/*.styl' ));

app.get('/main.css', function ( req, res ) {
	res.send(main.css)
});

app.listen(port);
