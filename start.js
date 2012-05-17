var http = require('http');


//inicjalizacja
var databaseUrl = "stuszynski";
var collections = ["ufo"];

var db = require("mongojs").connect(databaseUrl, collections);



	
//couch

var options = {
  host: 'localhost',
  port: 5984,
  path: '/stuszynski/ufo',
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

function datacollect(){
var doc = {"ufo" :[]}
var i=0;

db.ufo.find({}, function(err, wyniki) {
  if( err || !wyniki) 
	console.log(err+"No female users found");
  else wyniki.forEach(function(data) {
	  
	doc.ufo[i] = data;
	i++;
	
	});});
	
	console.log(data);
  
}	

datacollect();
//var doc = {dupa:"zupa"};
//request.write(JSON.stringify(doc));
//request.end();

