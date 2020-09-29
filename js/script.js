// Start of Assignment Code

//variables for Users Password Choices

var PWlength;
var Choosenumbers;
var chooselowerCase;
var choosespecchar;
var chooselowerCase;
var chooseupperCase;
var letters2;
var cond;

//Set Password Vaules for Variables:

//numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

//Letters
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Special Characters
var specchar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "_", "<", ">", "/", "/"];

//Conversion to uppercase if selected
var upperCase = function(letters) {
	//= function(x) {
	return letters.toUpperCase();
};

//variable for uppercase letters
letters2 = letters.map(upperCase);


var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.textContent = password;
}

// This function is to generate the password
function generatePassword(password) {

	//Asks users for their choice of password length
	PWlength = parseInt(prompt("How Long of a password would you prefer?  Must be between 8 and 128 characters"));

	// This validates that the user has met the criteria stated in the prompt
	if (!PWlength) {
		alert("There needs to be a value");
	} else if (PWlength < 8 || PWlength > 128) {
		PWlength = parseInt(prompt("It must be between 8 and 128 characters"));
	} else {
		Choosenumbers = confirm("Do you want your password to have numbers?");
		chooselowerCase = confirm("Do you wish for your password to contain Lowercase letters?");
		choosespecchar = confirm("Do you want any special characters in your password?");
		chooseupperCase = confirm("Do you wish for your password to contain Uppercase Letters?");
	}

	//This validates the choices the user made in the confirms
	// creates a array of the choices
	var CSelect = [Choosenumbers, chooselowerCase, choosespecchar, chooseupperCase];
	var CSelectors = [numbers, letters, specchar, letters2];
	var childselector = [];

	// this loops through and creates an array of the password requirements needed
	for (var i = 0; i < CSelect.length; i++) {
		if (CSelect[i]) {
			childselector.push(CSelectors[i]);
		}
	}

	//This is to confirm the conditions and which criteria to include in the password variable
	//array below
	if (childselector.length === 4) {
		cond = childselector[0].concat(childselector[1], childselector[2], childselector[3]);
	} else if (childselector.length === 3) {
		cond = childselector[0].concat(childselector[1], childselector[2]);
	} else if (childselector.length === 2) {
		cond = childselector[0].concat(childselector[1]);
	} else if (childselector.length === 1) {
		cond = childselector[0];
	} else {
		cond = alert("You must choose at least one criteria!");
	}

	// Sets a empty array to store random variables
	var pwp = [];

	// Start the random selection of variables:
	for (var j = 0; j < PWlength; j++) {
		var chars = cond[Math.floor(Math.random() * cond.length)];
		pwp.push(chars);
	}


	//Makes the array into a string and then returns
	//to the write function to be imputed into the text box.
	password = pwp.join("");
	return password;

}


