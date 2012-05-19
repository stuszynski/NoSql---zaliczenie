
var databaseUrl = "stuszynski";
var collections = ["ufo"];

var db = require("mongojs").connect(databaseUrl, collections);


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
