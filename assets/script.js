// Assignment Code
var generateBtn = document.querySelector("#generate");

var lengthPassword;
var lowerCaseLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//Convert lower case letters  upper case 
var upper = lowerCaseLetter.map(lowerCaseLetter => lowerCaseLetter.toUpperCase());
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var specialCharacters = ["~", "!", "@", "#", "$", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|"] 
var options;
var passwordEmpty = [];
var userPassword = [];
var userInput = "";
var lowerCase;
var upperCase;
var number;
var symbol;


var generatePassword = function () {

  userInput = prompt("How long would you like your password to be? Choose from 8 to 128 characters!");
  
  if (!userInput) {
    alert("The password length needs to be defined!");
  
  } else if ( userInput < 8 || userInput > 128) {
    
    userInput = prompt("The password length must be between 8 and 128 characters!");

  } else {

    var lowerCase = confirm("Would you like your password to include lower case characters?");
    var upperCase = confirm("Would you like your password to include upper case characters?");
    var number = confirm("Would you like your password to include numbers?");
    var symbol = confirm("Should your password include any special characters?");
  
  };
  
  if (!lowerCase && !upperCase && !number && !symbol) {
    
    alert("The password must contain one of the types!");

  } 

  //4 character types
  if (lowerCase && upperCase && number && symbol) {
    userPassword = lowerCaseLetter.concat(upper, numbers, specialCharacters);
  
    // 3 character types
  } else if (!lowerCase && upperCase && number && symbol) {
    userPassword = upper.concat(numbers, specialCharacters);
  
  } else if (lowerCase && !upperCase && number && symbol) {
    userPassword = lowerCaseLetter.concat(numbers, specialCharacters);

  } else if (lowerCase && upperCase && !number && symbol) {
    userPassword = upper.concat(lowerCaseLetter, specialCharacters);
  
  } else if (lowerCase && upperCase && number && !symbol) {
    userPassword = upper.concat(numbers, lowerCaseLetter);
  
  //2 character types
  } else if (lowerCase && upperCase) {
    userPassword = lowerCaseLetter.concat(upper);
  
  } else if (lowerCase && number) {
    userPassword = lowerCaseLetter.concat(numbers);
  
  } else if (lowerCase && symbol) {
    userPassword = lowerCaseLetter.concat(specialCharacters);
  
  } else if (upperCase && number) {
    userPassword = upper.concat(numbers);
  
  } else if (number && symbol){
    userPassword = numbers.concat(specialCharacters);
  
  } else if (upperCase && symbol) {
    userPassword = upper.concat(specialCharacters);
  
  //Only 1 type of characters
  } else if (upperCase) {
    userPassword = upper;

  } else if (lowerCase) {
    userPassword = lowerCaseLetter;

  } else if (symbol) {
    userPassword = specialCharacters;

  } else if (number) {
    userPassword = numbers;
  };

  for (var i = 0; i < userInput; i++ ) {
    
    var options = userPassword[Math.floor(Math.random() * userPassword.length)];
    passwordEmpty.push(options);
  }

  var password = passwordEmpty.join('');
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
