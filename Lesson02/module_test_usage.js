//import * as say from './module_test.js'
var Saysomething = require('Modul-Demo');
//var s = saysomething.say_hello('en');

var s = new Saysomething('fr');

console.log(s.sayHello())
console.log(s.sayBuy())	
