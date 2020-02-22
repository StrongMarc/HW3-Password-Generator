// Assignment Code
var generateBtn = document.querySelector("#generate");

function passwprdLength () {
  var length = prompt(`Choose a legnth of at least 8 characters and no more than 128 characters`)
  console.log(length)
}

function criteriaType () {
  var criteria = prompt(`Select password criteria to include:  Press "1" for lenth or Press "2" for character types`);
  console.log(criteria)
  if (isNaN(criteria)) {
    criteriaType ()
  }
  else if (criteria < 1 || criteria > 2) {
    criteriaType ()
  }
}
criteriaType();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
