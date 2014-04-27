var 
// fs = require('fs'),
// dateformat = require('dateformat'),
util = require('util'),
url = require('url'),
_ = require('underscore');

var users = express.Router();

// Define all of your handler functions here
function getAllUsers(req,res,next){
	console.log(req.method + ':' + req.url); // Basic logging
	var returnObj = {};

	res.json(returnObj);
}

function getBasicDetails (req,res,next) {
	// body...
}


// Map all of your handler functions in one place at the bottom
// that you can easily figure out where each route is mapping in one quick glance
users.get('/:from-:to',getAllUsers);
users.get('/:userId',getBasicDetails);

app.use('/users',users);