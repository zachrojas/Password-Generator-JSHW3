// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = '0123456789';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lower = 'abcdefghijklmnopqrstuvwxyz';
var special = '!@#$^&%*()+=-[]{}|:<>?,.';

// Function for prompts
function questions() {
  var isValid = false;

  do {
    var userLength = prompt("Choose a password length between 8 and 128 characters");
    var userNumbers = confirm("Do you want your password to contain numbers?");
    var userUpper = confirm("Do you want your password to contain upper case letters?");
    var userLower = confirm("Do you want your password to contain lower case letters?");
    var userSpecial = confirm("Do you want your password to contain special characters?");
    
    var responseOptions = {
      userLength: userLength,
      userNumbers: userNumbers,
      userLower: userLower,
      userUpper: userUpper,
      userSpecial: userSpecial
    } 

    if((userLength < 8)||(userLength > 128))
    alert("Choose a number between 8 and 128");

    else if((!userNumbers)&&(!userLower)&&(!userUpper)&&(!userSpecial))
    alert("You Must choose at least one type.");

    else
    isValid = true;

  } while(!isValid);

  return responseOptions;
}

// Generates password with inputs
function generatePassword() {
  var passwordOptions = questions();
  var possibleCombo = [];
  var ranPassword = "";

  if (passwordOptions.userNumbers) {
    for (var i of numbers)
      possibleCombo.push(i);
  }
  if (passwordOptions.userLower) {
    for (var i of lower)
      possibleCombo.push(i);
  }
  if (passwordOptions.userUpper) {
    for (var i of upper)
      possibleCombo.push(i);
  }
  if (passwordOptions.userSpecial) {
    for (var i of special)
      possibleCombo.push(i);
  }

  console.log(possibleCombo);

  for (var i = 0; i < passwordOptions.userLength; i++) {
    ranPassword += possibleCombo[Math.floor(Math.random() * possibleCombo.length)];
  }

  console.log(ranPassword);

  return ranPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);