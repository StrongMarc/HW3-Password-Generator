// Assignment Code
var generateBtn = document.querySelector("#generate");
var criteria = prompt(`Select password criteria to include:  Press "1" for lenth or Press "2" for character types`);
console.log(criteria)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
