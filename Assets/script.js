// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Start of code
function generatePassword() {

// characters special character, number, upper case and lower case
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lower = ["a","b","c","d","e","f","g", "h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var char = ["!","@","#","$","%","^","&","*","(",")","_","+","~","/","?","`","-",":",";","<",">"];


//  prompt user for the length and echo back
var length = prompt("How long do you want your password to be? pick between 8-128");
console.log(length);
var char = confirm("Do you want special character? Press Ok for Yes or Cancel for No");
console.log(char);
var num = confirm("Do you want to include numbers? Press Ok for Yes or Cancel for No ");
console.log(num);
var upper = confirm("Do you want upper case?  Press Ok for Yes or Cancel for No " );
console.log(upper);
var lower = confirm("Do you want lower case? Press Ok for Yes or Cancel for No ");
console.log(lower);




}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// TO DOs
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page