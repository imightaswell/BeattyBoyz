function calculator(){

var gender = document.getElementById("gender").value;
var height = document.getElementById("height").value;
var age = document.getElementById("age").value;
var weight = document.getElementById("weight").value;
var value; 

if (gender=="1"){
	value=(13.397*weight+4.799*height-5.677*age) + 88.362;
}

else {
	value=(13.397*weight+4.799*height-5.677*age) + 447.593;
}
}

document.getElementsByTagName("button")[0].addEventListener("click", function()){
	calculator();
	alert(value);
}



