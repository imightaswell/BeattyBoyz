function validateInputs(){

	var result = true;

	var age = document.forms.calcForm.age.value;
	var weight = document.forms.calcForm.weight.value;

	var male = new Boolean(document.forms.calcForm.gMale.checked);
	var female = new Boolean(document.forms.calcForm.gFemale.checked);
	
	var array = new Array(age, weight);
	var array2 = new Array("age","weight");

	
		for (i=0;i<2;i++){
			if (array[i]==null || array[i]=="" || isNaN(array[i])){
				document.getElementById("label"+array2[i]).style.color = "red";
				result = false;
			}
		}

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

