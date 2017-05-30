var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

mongoose.connect('mongodb://lizaveta40:28l06i19z97a@ds155811.mlab.com:55811/todos');

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type : 'application/vnd.api+json'}));
app.use(methodOverride());

var Todo = mongoose.model('Todo', {
	text : String
});

app.get('*', function(req, res){

	res.sendfile('./public/index.html');

});
 
app.listen(8080);
console.log("App listening on port 8080...");
