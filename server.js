// An example express server implementing a REST API

var express = require('express');
var bodyParser = require('body-parser');

var books = require('./routes/book-routes');
var app = express();

app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/'));

// The request body is received on GET or POST.
// A middleware that just simplifies things a bit.
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

// Get the index page:
app.get('/', function(req, res) {
    res.sendfile('index.html');
});

app.get('/books', books.findAll);

app.post('/addbook', books.addOne);

app.put('/like/:isbn', books.like);


// Start the server
app.listen(3000);
console.log('Listening on port 3000');
