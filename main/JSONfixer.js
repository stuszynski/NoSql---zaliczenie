/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

//ladujemy jsona
var dzejson = require('./export.json');
//dodatkowe biblioteki
var fs = require('fs');
//globale



function fixer (){
    
this.fixed = { "docs":[] };
//wewnętrzna

this.zapisz = function(pliczek){
fs.writeFile("./fixed.json", pliczek, function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
});}


this.fix = function(){

var i=0;

dzejson.forEach(function(data){
    data._id = "";
    this.fixed.docs[i] = data; //FIX TypeError: Cannot read property 'docs' of undefined ??WTF??
    this.i++;
});}
console.log("Chyba policzone");
}

var x = new fixer();

x.fix().zapisz(x.fixed);
