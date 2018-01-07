var HomePage = function(){

	
	var firstNumber = element(by.model('first'));
	var secondNumber = element(by.model('second'));
	var goButton = element(by.id('gobutton'));
	var latestResult = element(by.binding('latest'));
	
	
	this.getTitle = function(){
		return browser.getTitle();
	};
	
	this.getResult = function(item1, item2){
		element(by.model('first')).sendKeys(item1);
		element(by.model('second')).sendKeys(item2);
		element(by.id('gobutton')).click();
		return element(by.binding('latest')).getText();
	};
};
module.exports = new HomePage();
	
	