//var Todo = require('./models/todo');

module.exports = function(app) {
	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});
};