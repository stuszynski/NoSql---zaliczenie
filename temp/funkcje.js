//inicjalizacja
var databaseUrl = "zadanie";
var collections = ["ufo"];

var db = require("mongojs").connect(databaseUrl, collections);

var osoba = {
	
	imie: "przemek",
	pass: "dupka123",
	sex: "male"
	
	}

function save(jsonobject){
	db.ufo.save( jsonobject, function(err, saved) {
		if( err || !saved ) console.log("User not saved");
			else console.log("User saved");
})}; 
	
//duuupa;

save(osoba);

function verb(){
	if (osoba.sex == "male")
		return "został dodany";
	else 
		return "została dodana";
	}

console.log(osoba.imie+" "+verb()+" do bazy! :)");


//db.adresy.save({email: "srirangan@gmail.com", password: "iLoveMongo", sex: "male"});

/*db.adresy.find({sex: "male"}, function(err, wyniki) {
  if( err || !wyniki) 
	console.log(err+"No female users found");
  else wyniki.forEach(function(femaleUser) {
	console.log(femaleUser);
	});}); */
