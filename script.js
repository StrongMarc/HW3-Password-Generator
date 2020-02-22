// Assignment Code
var generateBtn = document.querySelector("#generate");

function passwprdLength () {
  var length = prompt(`Choose a legnth of at least 8 characters and no more than 128 characters`)
  console.log(length)
}

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
    passwprdLength();
  }
  else if (criteria == 2){
    console.log(criteria)
    characterTypes();
  }
}

generateBtn.onclick = function() {
	criteriaType();
}
// alternate code
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
