
// Map Reduce przeprowadzony po ilosci występowaniu danych lokacji :)

map = function() {
    emit(this.Location,1);
    
};

reduce = function(key, values) {
  var value = 0;
  values.forEach(function(count) {
    value += count;
  });
  return value;
};


db.ufo.mapReduce(map, reduce, {out:"reduced"});