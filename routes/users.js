var 
// fs = require('fs'),
// dateformat = require('dateformat'),
util = require('util'),
url = require('url'),
_ = require('underscore');

var users = express.Router();

users.use(function(req, res, next) {
  
  // Logic that is common to all the routes
  console.log(req.method + ':' + req.url); // Basic logging
  next();

});

// Define all of your handler functions here
function getAllUsers(req,res,next){

	var returnObj = {'hey':10};

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