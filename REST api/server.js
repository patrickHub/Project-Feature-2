// set up ========================
    var express  = require('express');
    var app      = express();                               // create our app w/ express
   var morgan = require('morgan');             // log requests to the console (express4)
    var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
    var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
	var mongodb = require('mongodb');
	var request = require('request-promise');
  
  // configuration =================

    app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
    app.use(morgan('dev'));                                         // log every request to the console
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    app.use(methodOverride());
	
	// define model =================

	
	var db;
	var REPOS_COLLECTION = "repos";

	// Connect to the database before starting the application server.
	mongodb.MongoClient.connect(process.env.MONGODB_URI, function (err, database) {
	  if (err) {
		console.log(err);
		process.exit(1);
	  }

	  // Save database object from the callback for reuse.
	  db = database;
	  console.log("Database connection ready");

	  // Initialize the app.
	  var server = app.listen(process.env.PORT || 8080, function () {
		var port = server.address().port;
		console.log("App now running on port", port);
	  });
	});
	var counter = [];
	counter[0] = 0;
	counter[1] = 0;
	counter[2] = 0;
	counter[3] = 0;
	counter[4] = 0;
	counter[5] = 0;
	counter[6] = 0;
	counter[7] = 0;
	counter[8] = 0;
	var years = [];
	years[0] = "2008";
	years[1] = "2009";
	years[2] = "2010";
	years[3] = "2011";
	years[4] = "2012";
	years[5] = "2013";
	years[6] = "2014";
	years[7] = "2015";
	years[8] = "2016";
	years[9] = "2017";
	
	// routes ======================================================================

    // api ---------------------------------------------------------------------
    // get all repos
	
	app.get("/api/repos", function(req, res) {
	  db.collection(REPOS_COLLECTION).find({}).toArray(function(err, docs) {
		if (err) {
		  handleError(res, err.message, "Failed to get repos.");
		} else {
		  res.status(200).json(docs);  
		}
	  });
	});
	
    app.get('/api/repos/total', function(req, res) {
		
		
		// First we fetch repository from git api and we add its to db
		fetchAndSaveRepos();
		
		db.collection(REPOS_COLLECTION).count({created_at: {$gte: years[0], $lt: years[1]}},
			function(err, count) {
				counter[0]  = count;
				console.log(count);
			});
		db.collection(REPOS_COLLECTION).count({created_at: {$gte: years[1], $lt: years[2]}},
			function(err, count) {
				counter[1]  = count;
				console.log(count);
			});
		db.collection(REPOS_COLLECTION).count({created_at: {$gte: years[2], $lt: years[3]}},
			function(err, count) {
				counter[2]  = count;
				console.log(count);
			});
		db.collection(REPOS_COLLECTION).count({created_at: {$gte: years[3], $lt: years[4]}},
			function(err, count) {
				counter[3]  = count;
				console.log(count);
			});
		db.collection(REPOS_COLLECTION).count({created_at: {$gte: years[4], $lt: years[5]}},
			function(err, count) {
				counter[4]  = count;
				console.log(count);
			});
		db.collection(REPOS_COLLECTION).count({created_at: {$gte: years[5], $lt: years[6]}},
			function(err, count) {
				counter[5]  = count;
				console.log(count);
			});
		db.collection(REPOS_COLLECTION).count({created_at: {$gte: years[6], $lt: years[7]}},
			function(err, count) {
				counter[6]  = count;
				console.log(count);
			});
		db.collection(REPOS_COLLECTION).count({created_at: {$gte: years[7], $lt: years[8]}},
			function(err, count) {
				counter[7]  = count;
			});
		db.collection(REPOS_COLLECTION).count({created_at: {$gte: years[8], $lt: years[9]}},
			function(err, count) {
				counter[8]  = count;
				console.log(count);
			});
			for(var i = 0; i<counter.length; i++){
				console.log(i + ": " + counter[i]);
			}
		res.status(200).json(counter); 
		

    });

	// Generic error handler used by all endpoints.
	function handleError(res, reason, message, code) {
	  console.log("ERROR: " + reason);
	  res.status(code || 500).json({"error": message});
	}
	
	function fetchAndSaveRepos(){
		
		var options = {
			uri: 'https://api.github.com/users/wasadigi/repos',
			headers: {
				'User-Agent': 'Request-Promise'
			},
			json: true // Automatically parses the JSON string in the response
		};

		console.log("Fetching repos wia the REST api...");
		return request(options)
			.then(function(repos){
				console.log("Repos fetched.");
				db.collection(REPOS_COLLECTION).count({},
					function(err, count) {
						if(repos.length != count){
							db.collection(REPOS_COLLECTION).remove();
							db.collection(REPOS_COLLECTION).insertMany(repos);
						}
					})
				return repos;
			});
	}

