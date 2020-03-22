/** Declares the variables that will be the BMR, cutting, and bulking calories **/
var base;
var cutting;
var bulking;

/** Declares the macro arrays  **/

var maintainArray;
var cuttingArray;
var bulkingArray;

var height;
var age;
var weight;

function calculator(){

/** Declares the gender variable that is true or false if the male radio button is selected or not **/
var gender = new Boolean(document.getElementById("genderM").checked);

/** Grabs the raw weight in pounds from the form **/
var weightInPounds = document.getElementById("weight").value;


/** Grabs the height, age, weight, and activity level from the form **/
height = document.getElementById("height").value*2.54;
age = document.getElementById("age").value;
weight = document.getElementById("weight").value/2.205;
var activity = document.getElementById("activity").value;

/** Declares the macro variables **/


/** Declares the multiplier variable that sets to a specific number depending on what activity level was selected **/
var multiplier;


if (activity == "Moderate"){
	multiplier = 1.4;
}

else if (activity == "Intense"){
	multiplier = 1.7;
}

else if (activity == "Athlete"){
	multiplier = 1.95;
}

else {
	multiplier = 1.2;
}

/** Calculates the BMR calories using the Mifflin-St Jeor equation depending on the gender of the user **/
if (gender==true){
	base=((10*weight+6.25*height-5*age) + 5) * multiplier;
}

else {
	base=((10*weight+6.25*height-5*age) - 161) * multiplier;
}

/** Determines the cutting and bulking calories by either taking away 20% from the BMR and adding 15% to the BMR **/
cutting = base - (base*.2);
bulking = base + (base*.15);

/** A nested function that takes a set amount of calories "c" and a set weight "w" and calculates 
	the macro nutrients a person should consume daily **/
function macros(c, w){

/** Creates an array that will supply the calculated. The array will look like: [protein, fats, carbs]**/
var array = new Array();

/** Calculates the protein (1g per pound of body weight) then takes away the calories from the protein from the total **/
var protein = w;
array.push(protein);
var leftOver = c - (protein*4);

/** Calculates the fats (25% of caloric intake) then takes away the calories from the fats from the remaining calories **/
var fats = ((c*.25)/9).toFixed(0);
array.push(fats);
leftOver = leftOver - (fats*9);

/** Calculates the carbs (remaining calories) then takes away the calories from the fats from the remaining calories **/
var carbs = (leftOver/4).toFixed(0);
array.push(carbs);

return array;
}

/** calls the function for the base, cutting, and bulking calories **/
baseArray = macros(base, weightInPounds);
cuttingArray = macros(cutting, weightInPounds);
bulkingArray = macros(bulking, weightInPounds);

}


/** Creates an event lister that listens for the calculate button to be clicked then prints the results after the click  **/
document.getElementsByTagName("button")[0].addEventListener("click", function() {
	calculator();

	/** Ensures that all inputs are filled and numerical**/
	if (weight=="" || age=="" || height==""){
		alert("Please Fill in All Fields");
	}

	else {
	document.getElementById('baseCals').innerHTML = base.toFixed(0);
	document.getElementById('cuttingCals').innerHTML = cutting.toFixed(0);
	document.getElementById('bulkingCals').innerHTML = bulking.toFixed(0);

	document.getElementById('baseProtein').innerHTML = baseArray[0];
	document.getElementById('baseFats').innerHTML = baseArray[1];
	document.getElementById('baseCarbs').innerHTML = baseArray[2];

	document.getElementById('cuttingProtein').innerHTML = cuttingArray[0];
	document.getElementById('cuttingFats').innerHTML = cuttingArray[1];
	document.getElementById('cuttingCarbs').innerHTML = cuttingArray[2];

	document.getElementById('bulkingProtein').innerHTML = bulkingArray[0];
	document.getElementById('bulkingFats').innerHTML = bulkingArray[1];
	document.getElementById('bulkingCarbs').innerHTML = bulkingArray[2];
	}

})