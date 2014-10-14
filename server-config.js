var express = require('express');
var partials = require('express-partials');

var app = express();

// app.use(partials());
// app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('Hello World');
});