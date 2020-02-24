// Assignment Code
var generateBtn = document.querySelector("#generate");

var typeCount = 0;
//code for user input to define password length
function passwordLength () {
  length = parseInt(prompt(`Choose a length of at least 8 characters and no more than 128 characters (Enter: 8-128)`))
  console.log(length)
  if (length == null && typeCount == 0) {
    alert("User cancelled the prompt.  Returning to previous prompt");
    criteriaType ();
  }
  if (length == null && typeCount == 1) {
    alert("User cancelled the prompt.  Must define password length criteria");
    passwordLength ();
  }
  else if (isNaN(length)) {
    passwordLength ();
  }
  else if (length < 8 || length > 128) {
    passwordLength ();
  }
  else {
    typeCount++
    console.log(typeCount)
    if (typeCount==1){
      alert("Thank you. Now select character type criteria")
      characterTypes ();
    }
  }
}

//code for user input to define types of characters to be 
// utilized for the generate password
function characterTypes () {
  console.log(length)
  lowercase = confirm(`Password criteria to include lowercase?`)
  console.log(lowercase)
  uppercase = confirm(`Password criteria to include uppercase?`)
  console.log(uppercase)
  numeric = confirm(`Password criteria to include numeric?`)
  console.log(numeric)
  specialChar = confirm(`Password criteria to include special characters?`)
  console.log(specialChar)
  if (lowercase == true || uppercase == true || numeric == true || specialChar == true) {
    typeCount++
    console.log(typeCount)
    if (typeCount==1){
      alert("Thank you. Now select password length criteria")
      passwordLength ();
    }
  }
  else {
    alert(`You must select "OK" for at least one type. Try again.`)
    characterTypes ();
  }
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
function generatePassword(length) {
  var password = '';
  var characters = '';
  if (lowercase) {
    characters += 'abcdefghijklmnopqrstuvwxyz';
    console.log(characters);
  }
  if (uppercase){
    characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    console.log(characters);
  }
  if (numeric){
    characters += '1234567890';
    console.log(characters);
  }
  if (specialChar){
    characters += `!"#$%&'()*+,-./:;<=>?@[\]^_{|}~`;
    console.log(characters);
  }
    var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    password += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(length);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
