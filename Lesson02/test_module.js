//console.log(module);
//console.log(exports);

function SayHello (lang) {
	this.language = lang;
	this.sayHello = function() {
		if (this.language == 'en')
			return 'Hello!!';
		else if (this.language == 'fr')
			return 'Bonjour!!'
	}
	this.sayBuy = function() {
		if (this.language == 'en')
			        return 'Buy!!';
		else if (this.language == 'fr')
			        return 'Au revoir!!'
	}
}
//exports.say_hello = function (lang) {
//	return new SayHello(lang);	
//};
module.exports = SayHello;
console.log(module);
console.log(exports);
//let s = new SayHello('en');
//console.log(s instanceof SayHello);
//console.log(s.sayHello());
//console.log(s.sayBuy());

