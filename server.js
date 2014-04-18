// modules =================================================
var express	= require('express');
var app		= express();
var mongoose= require('mongoose');
var port	= process.env.PORT || 8080;
var db		= require('./config/db');

mongoose.connect(db.url);

app.configure(function() {
	app.use(express.static(__dirname + '/public'));
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
});

// routes ==================================================
require('./app/routes')(app);

// start app ===============================================
app.listen(port);
console.log('Magic happens on port ' + port);
exports = module.exports = app;