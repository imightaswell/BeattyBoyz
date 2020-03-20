var value;
var cutting;
var bulking;

function validateInputs(){
	/* Default return for the function */
	var result = true;

	/* Grabs the age and weight entered in the form */
	var age = document.getElementById("age").value;
	var weight = document.getElementById("weight").value;

	/* Grabs if the male or female option was choosen in the form */
	var male = new Boolean(document.getElementById("genderM").checked);
	var female = new Boolean(document.getElementById("genderF").checked);

	/* Enters the age and weight entered into an array */
	var array = new Array(age, weight);
	/* Creates a second array to be used in the for loop below */
	var array2 = new Array("age","weight");

	/* Loops through the age and weight array to check if the values entered were not empty and not a number. If they are the labels are made red*/
		for (i=0;i<2;i++){
			if (array[i]==null || array[i]=="" || isNaN(array[i])){
				document.getElementById("label"+array2[i]).style.color = "red";
				result = false;
			}
		}
	/* Checks if the male or female option was choosen in the form. If not makes the label red */
		if (male == false && female == false){
			document.getElementById("labelgender").style.color = "red";
			result = false;
		}


		return result;
	
}

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

else if (activity == "Athlete"){
	multiplier = 1.95;
}

else {
	multiplier = 1;
}

if (gender==true){
	value=((10*weight+6.25*height-5*age) + 5) * multiplier;
}

else {
	value=((10*weight+6.25*height-5*age) - 161) * multiplier;
}

cutting = value - (value*.2);
bulking = value + (value*.15);
}





document.getElementsByTagName("button")[0].addEventListener("click", function() {
	calculator(); 
	document.getElementById('baseCals').innerHTML = value;
	document.getElementById('cuttingCals').innerHTML = cutting;
	document.getElementById('bulkingCals').innerHTML = bulking;
})


