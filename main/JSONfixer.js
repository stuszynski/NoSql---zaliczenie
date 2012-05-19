/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

//ladujemy jsona
var dzejson = require('./export.json');
//dodatkowe biblioteki
var fs = require('fs');
//globale

var end = false;

function fixer (){
    
this.docs = new Array();


this.zapisz = function(){
fs.writeFile("./fixed.json", this.docs, function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
        
    }
});}


this.fix = function(res){
var i = 0;

dzejson.forEach(function(data){
    delete data['_id'];
    delete data[''];
    //console.log(data);
    this.docs[i] = data; //FIXED? TypeError: Cannot read property 'docs' of undefined ??WTF??
    console.log(this.docs[i]);
    i++;
   // if(this.i == dzejson.length-1) end=true;
});

}
console.log("Chyba policzone");

}

var x = new fixer();

x.fix();
x.zapisz();
//
//while(1){
//if(end == true){
//x.zapisz();
//}
//}
