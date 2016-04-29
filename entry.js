function Entry(){
	var username = new String();
	var password = new String();
	var email = new String();
	
	this.getUN = function(){
		return username;
	}
	
	this.getPW = function(){
		return password;
	}
	
	this.getEM = function(){
		return email;
	}
	
	this.setUN = function(inUsername){
		username = inUsername;
	}
	
	this.setPW = function(inPassword){
		password = inPassword;
	}
	
	this.setEM = function(inEmail){
		email = inEmail;
	}
	
	this.tostring = function(){
		return username + "," + email + "," + password;
	}
	this.destring = function(input){
		var strings = input.split(",");
		this.setUN(strings[0]);
		this.setEM(strings[1]);
		this.setPW(strings[2]);
	}
}