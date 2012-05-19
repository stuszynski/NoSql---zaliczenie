var http = require('http');


//inicjalizacja
var databaseUrl = "stuszynski";
var collections = ["ufo"];

var db = require("mongojs").connect(databaseUrl, collections);



	
//couch

var options = {
  host: 'localhost',
  port: 5984,
  path: '/stuszynski',
  method: 'POST',                                  // changed
  headers: { "content-type": "application/json" }  // new stuff
};

var request = http.request(options, function(res) {
  console.log('status:', res.statusCode);
  console.log('headers:', res.headers);
  if (res.statusCode == 201) {
    console.log('document successfully added');
  } else {
    console.log('could not add document');
  };
});

request
  .on('error', function(e) {
    console.log('problem with request:', e.message);
  })

request
  .on('response', function(res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      console.log('body:', chunk);
    });
  });


db.ufo.find({}, function(err, wyniki) {
  if( err || !wyniki) 
	console.log(err+"Nie ma niczego!");
  else wyniki.forEach(function(element) {
	  
	request.write(JSON.stringify(element));
	
	});
      request.end();
    
  });
	

//var doc = {dupa:"zupa"};
//request.write(JSON.stringify(doc));
//

