var objBase = require('./Base');
var objHome = require('./HomePage');
describe('Protractor Demo App', function (){
	
	
	
	onPrepare: ()=>{
		objBase.getBrowserMaxWindow();
	},
	
	beforeEach(function(){
		objBase.get();
	});
	
	it('should have a title',function(){
			
		expect(objHome.getTitle()).toEqual('Super Calculator');
	});
	
	it('should add one and two',function(){
		expect(objHome.getResult(1,2)).toEqual('3');
	});
	
	it('should add one and three',function(){
		expect(objHome.getResult(1,3)).toEqual('4');
	});
	
	
});