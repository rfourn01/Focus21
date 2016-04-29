var curStatus = {
	type: "o",
	value: "",
	tostring: function(){
		return curStatus.type + "," + curStatus.value;
	},
	destring: function(input){
		var strings = input.split(",");
		curStatus.type = strings[0];
		curStatus.value = strings[1];
	}
}
var input = new Entry();
var curUser = new Entry();
function init(){
	var temp = new Entry();
	if (!localStorage.getItem("status")){
		curStatus.type = "o";
		curStatus.value = "";
		localStorage.setItem("status", curStatus.tostring());
		showOut();
	} else {
		curStatus.destring(localStorage.getItem("status"));
		if(curStatus.type == "o"){
			showOut();
		} else if(curStatus.type == "l"){
			temp.destring(localStorage.getItem(curStatus.value.toLowerCase()));
			curUser = temp;
			
			showTwo();
		}
	}

}
function showOut(){
	document.getElementById("userform").style.display = "block";
	document.getElementById("userform").value = "";
	document.getElementById("passform").style.display = "block";
	document.getElementById("passform").value = "";
	document.getElementById("new").style.display = "block";
	document.getElementById("notUser").style.display = "none";
	document.getElementById("next").style.display = "block";
	document.getElementById("login").style.display = "none";
	document.getElementById("userName").style.display = "none";
	document.getElementById("userEmail").style.display = "none";
	document.getElementById("APPS").style.display = "none";
	document.getElementById("userImg").style.display = "none";
	document.getElementById("topBar").style.display = "none";
}
function showTwo(){
	document.getElementById("userform").style.display = "none";
	document.getElementById("userform").value = "";
	document.getElementById("passform").style.display = "block";
	document.getElementById("passform").value = "";
	document.getElementById("new").style.display = "none";
	document.getElementById("notUser").style.display = "block";
	document.getElementById("next").style.display = "none";
	document.getElementById("login").style.display = "block";
	document.getElementById("userName").style.display = "block";
	document.getElementById("userEmail").style.display = "block";
	document.getElementById("APPS").style.display = "none";
	document.getElementById("userImg").style.display = "block";
	document.getElementById("topBar").style.display = "none";
	printInfo();
}
function showApp(){
	document.getElementById("userform").style.display = "none";
	document.getElementById("passform").style.display = "none";
	document.getElementById("new").style.display = "none";
	document.getElementById("notUser").style.display = "none";
	document.getElementById("next").style.display = "none";
	document.getElementById("login").style.display = "none";
	document.getElementById("userName").style.display = "none";
	document.getElementById("userEmail").style.display = "none";
	document.getElementById("APPS").style.display = "block";
	document.getElementById("logo").style.marginBottom = "0px";
	document.getElementById("userImg").style.display = "none";
	document.getElementById("topBar").style.display = "block";
}
function enter(){
	var temp = new Entry();
	input.setEM(document.getElementById("user").value);
	input.setPW(document.getElementById("pass").value);
	if (localStorage.getItem(input.getEM().toLowerCase())){
		temp.destring(localStorage.getItem(input.getEM().toLowerCase()));
		if (temp.getPW().localeCompare(input.getPW()) == 0){
			curUser.setUN(temp.getUN());
			curUser.setPW(temp.getPW());
			curUser.setEM(temp.getEM());
			curStatus.type = "l"
			curStatus.value = curUser.getEM();
			localStorage.setItem("status", curStatus.tostring());
			showTwo();
		} else {
			window.alert("WRONG PASSWORD");
			animation("login");
		}
	} else {
		window.alert("USER NOT FOUND");
	}
}
function enterTwo(){
	var temp = new Entry()
	input.setPW(document.getElementById("pass").value);
	temp.destring(localStorage.getItem(curStatus.value.toLowerCase()));
	if (temp.getPW().localeCompare(input.getPW()) == 0){
		showApp();
		curUser = temp;
		curStatus.type = "l"
		curStatus.value = curUser.getEM();
		localStorage.setItem("status", curStatus.tostring());
	} else {
		window.alert("WRONG PASSWORD");
	}
}
function newUser(){
	var temp = "a";
	do{
		temp = window.prompt("Enter an Email Address:", "");
		if (localStorage.getItem(temp.toLowerCase())){
			window.alert("USER EXISTS");
		}
		if (temp == null){
			return;
		}
	}while (localStorage.getItem(temp.toLowerCase()));
	input.setEM(temp);
	temp = window.prompt("Enter your Name:", "")
	input.setUN(temp);
	temp = window.prompt("Enter your Password:", "")
	input.setPW(temp);
	
	localStorage.setItem(input.getEM().toLowerCase(), input.tostring());
}
function notUser(){
	showOut();
	curStatus.type = "o";
	curStatus.value = "";
	localStorage.setItem("status", curStatus.tostring());
}
function printInfo(){
	document.getElementById("userName").innerHTML = curUser.getUN();
	document.getElementById("userEmail").innerHTML = curUser.getEM();
}
function animation(e) {
  var element = document.getElementById(id);
  
  element.classList.remove("runAnim");
  
  element.offsetWidth = element.offsetWidth;
  
  element.classList.add("runAnim");
}