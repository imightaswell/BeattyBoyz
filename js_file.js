var value;

function calculator(){


var gender = new Boolean(document.getElementById("genderM").checked);
var height = document.getElementById("height").value;
var age = document.getElementById("age").value;
var weight = document.getElementById("weight").value; 
var activity = document.getElementById("activity").value;
var multiplier;

if (activity == "Sedentary"){
	multiplier = 1.2;
}

else if (activity == "Moderate"){
	multiplier = 1.4;
}

else if (activity == "Intense"){
	multiplier = 1.7;
}

else {
	multiplier = 1.95;
}

if (gender==true){
	value=((10*weight+6.25*height-5*age) + 5) * multiplier;
}

else {
	value=((10*weight+6.25*height-5*age) - 161) * multiplier;
}
}



document.getElementsByTagName("button")[0].addEventListener("click", function() {
	calculator(); 
	document.getElementById('cals').innerHTML = value;
})


