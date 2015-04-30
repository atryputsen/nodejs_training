function  Say (lang) {
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
		        return 'Au revoir!!';								}

}

//export var variable = 5;

//exports.say_hello = function (lang) {
//	return new Say(lang);
//}
//
module.exports = Say;

//console.log(module);
//console.log(exports);
