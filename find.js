
//inicjalizacja
var databaseUrl = "zadanie";
var collections = ["ufo"];

var db = require("mongojs").connect(databaseUrl, collections);


db.ufo.find({sex: "male"}, function(err, wyniki) {
  if( err || !wyniki) 
	console.log(err+"No female users found");
  else wyniki.forEach(function(femaleUser) {
	console.log(femaleUser.imie);
	});});


