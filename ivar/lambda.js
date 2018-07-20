let AWS = require('aws-sdk');
exports.handler = function(event, context, callback) {

	console.log("Got an Invoke Request.");
	callback(null,'Successfully executed');
}