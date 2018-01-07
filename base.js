var Base = function (){

	var url = "http://juliemr.github.io/protractor-demo/";
	
	this.get = function() {
		browser.get(url);
	};
	
	this.getBrowserMaxWindow = function(){
		browser.driver.manage().window().maximize();
	};
};
module.exports = new Base();