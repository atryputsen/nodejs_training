const Say = require('./test_module');
//1st case: factory
//let s = say.say_hello('en');
//console.log(s.sayHello());
//2nd case: constructor
var s = new Say('fr');
console.log(s.sayBuy())
