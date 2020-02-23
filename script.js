// Assignment Code
var generateBtn = document.querySelector("#generate");

//code for user input to define password length
function passwordLength () {
  var length = prompt(`Choose a legnth of at least 8 characters and no more than 128 characters (Enter: 8-128)`)
  console.log(length)
  if (length == null) {
    alert("User cancelled the prompt.  Returning to previous prompt");
    criteriaType ();
  }
  else if (isNaN(length)) {
    passwordLength ();
  }
  else if (length < 8 || length > 128) {
    passwordLength ();
  }
}

//code for user input to define types of characters to be 
// utilized for the generate password
function characterTypes () {
  var lowercase = confirm(`Password criteria to include lowercase?`)
  console.log(lowercase)
  var uppercase = confirm(`Password criteria to include uppercase?`)
  console.log(uppercase)
  var numeric = confirm(`Password criteria to include numeric?`)
  console.log(numeric)
  var specialChar = confirm(`Password criteria to include special characters?`)
  console.log(specialChar)
}

//code for user input to select which criteria type to 
// define for the generated password
function criteriaType () {
  var criteria = prompt(`Select password criteria to include:  Press "1" for lenth or Press "2" for character types`);
  console.log(criteria)
  if (criteria == null) {
    alert("User cancelled the prompt.");
  }
  else if (isNaN(criteria)) {
    criteriaType ();
  }
  else if (criteria < 1 || criteria > 2) {
    criteriaType ();
  }
  else if (criteria == 1){
    passwordLength();
  }
  else if (criteria == 2){
    console.log(criteria)
    characterTypes();
  }
}

//Generate password by selecting button to initiate prompts
generateBtn.onclick = function() {
	criteriaType();
}
// alternate generate button code to start prompts
// document.getElementById('generate').onclick = function() {
// 	criteriaType();
// }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
