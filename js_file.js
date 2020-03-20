var value;

function calculator(){

var gender = document.getElementById("gender").value;
var height = document.getElementById("height").value;
var age = document.getElementById("age").value;
var weight = document.getElementById("weight").value; 

if (gender=="1"){
	value=(13.397*weight+4.799*height-5.677*age) + 88.362;
}

else {
	value=(13.397*weight+4.799*height-5.677*age) + 447.593;
}
}

var button = document.getElementById("button");

button.addEventListener("click", function() {
	calculator(); 
	document.getElementById('cals').innerHTML = value;
})


