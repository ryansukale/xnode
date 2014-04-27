var util = // fs = require('fs'),
// dateformat = require('dateformat'),
require('util'),
url = require('url'),
_ = require('underscore');

// Map all of your handler functions in one place on the top so
// that you can easily figure out where each route is mapping in one quick glance
app.post("/login",login);


// Define all of your handler functions here
function login(req,res,next){

	console.log(req.method + ':' + req.url); // Basic logging
	var returnObj = {};

	console.log(req.body);

	res.json(returnObj);

}