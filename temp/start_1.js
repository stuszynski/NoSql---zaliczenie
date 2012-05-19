//inicjalizacja
var databaseUrl = "stuszynski";
var collections = ["ufo"];

var db = require("mongojs").connect(databaseUrl, collections);



function find(){
    db.ufo.find({}, function(err, wyniki){
        if( err || !wyniki) 
            console.log(err+"No results");
        else return wyniki;
    });
}

var w = find();

console.log(w);