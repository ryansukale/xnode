var util = require('util'),
multiparty = require('multiparty');

var routes = express.Router();

routes.use(function(req, res, next) {
  
  // Logic that is common to all the routes
  console.log(req.method + ':' + req.url); // Basic logging
  next();

});

// Define all of your handler functions here
function uploadFiles(req,res,next){

	//var returnObj = {'hey':10};

	var form = new multiparty.Form();

  form.parse(req, function(err, fields, files) {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.write('received upload:\n\n');
    res.end(util.inspect({fields: fields, files: files}));
  });

	//res.json(returnObj);
}


routes.post('/',uploadFiles);

app.use('/fileUpload',routes);