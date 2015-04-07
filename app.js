
var express = require('express');
express.static(__dirname + '/');
var app = module.exports = express();
var port = process.env.PORT || 8080;


app.get('/', function(req, res) {
	res.redirect('/index.html');
});

app.listen(port);
console.log('Server up! Listening on port ' + port);