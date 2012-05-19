
//inicjalizacja
var databaseUrl = "stuszynski";
var collections = ["ufo"];

var db = require("mongojs").connect(databaseUrl, collections);


db.ufo.find({}, function(err, wyniki) {
  if( err || !wyniki) 
	console.log(err+"No female users found");
  else wyniki.forEach(function(data) {
	  
	console.log(data.DateOccurred);
	
	});});


