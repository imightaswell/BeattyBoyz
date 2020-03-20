function validateInputs(){
	/* Default return for the function */
	var result = true;

	/* Grabs the age and weight entered in the form */
	var age = document.forms.calcForm.age.value;
	var weight = document.forms.calcForm.weight.value;

	/* Grabs if the male or female option was choosen in the form */
	var male = new Boolean(document.forms.calcForm.gMale.checked);
	var female = new Boolean(document.forms.calcForm.gFemale.checked);

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

var gender;
var height;
var age;
var weight;
var value; 

try {
	if (gender!="male" || gender!="female")
		throw "incorrectgenderError";
}
catch(err){
	alert (err + "was thrown");
}

if (gender=="male"){
	value=(13.397*weight+4.799*height-5.677*age) + 88.362;
}

else {
	value=(13.397*weight+4.799*height-5.677*age) + 447.593;
}

return value;
}

