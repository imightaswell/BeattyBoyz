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
