/** Declares the variables that will be the BMR, cutting, and bulking calories **/
var value;
var cutting;
var bulking;

function calculator(){

/** Declares the gender variable that is true or false if the male radio button is selected or not **/
var gender = new Boolean(document.getElementById("genderM").checked);

/** Grabs the height, age, weight, and activity level from the form **/
var height = document.getElementById("height").value;
var age = document.getElementById("age").value;
var weight = document.getElementById("weight").value;
var activity = document.getElementById("activity").value;

/** Declares the multiplier variable that sets to a specific number depending on what activity level was selected **/
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

/** Calculates the BMR calories using the Mifflin-St Jeor equation depending on the gender of the user **/
if (gender==true){
	value=((10*weight+6.25*height-5*age) + 5) * multiplier;
}

else {
	value=((10*weight+6.25*height-5*age) - 161) * multiplier;
}

/** Determines the cutting and bulking calories by either taking away 20% from the BMR and adding 15% to the BMR **/
cutting = value - (value*.2);
bulking = value + (value*.15);
}

/** Creates an event lister that listens for the calculate button to be click then prints the results after the click  **/
document.getElementsByTagName("button")[0].addEventListener("click", function() {
	calculator(); 
	document.getElementById('baseCals').innerHTML = value;
	document.getElementById('cuttingCals').innerHTML = cutting;
	document.getElementById('bulkingCals').innerHTML = bulking;
})




