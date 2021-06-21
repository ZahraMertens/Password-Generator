// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Asign values to global variable which will be pushed to the password.
var lowerCaseLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//Convert lower case letters  upper case 
var upper = lowerCaseLetter.map(lowerCaseLetter => lowerCaseLetter.toUpperCase());
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var specialCharacters = ["~", "!", "@", "#", "$", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|"] 



var generatePassword = function () {

  //Define local variable only used in this function
  var userPassword;
  var userInput; 
  var passwordEmpty = []; //Asign empty array to passwordEmpty that we can push the random selection of the userPassword variable inside.
  
  //Asking user how many characters they want their password to be.
  userInput = prompt("How long would you like your password to be? Choose from 8 to 128 characters!");
  
  //If user clicks "cancel" the browser will tell them that the password length needs to be defined.
  if (!userInput) {
    alert("The password length needs to be defined!");
    return;
  
    //If the number is below 8 or above 128, the browser will ask again for a user input between 8 and 128.
  } else if ( userInput < 8 || userInput > 128) {
    
    alert("The password length must be between 8 and 128 characters!");
    return;

    //If the user enters a number between 8 and 128 the browser will ask what characters the user want the password to contain.
  } else {

    var lowerCase = confirm("Would you like your password to include lower case characters?");
    var upperCase = confirm("Would you like your password to include upper case characters?");
    var number = confirm("Would you like your password to include numbers?");
    var symbol = confirm("Should your password include any special characters?");
  
  };
  
  //Depending on the users answers all conditions below describe a different combination of characters.
  
  //If the user selects non of the character types the alert window will tell the user that at least one must be selected.
  if (!lowerCase && !upperCase && !number && !symbol) {
    
    alert("The password must contain one of the types!");
  } 

  //4 character types
  if (lowerCase && upperCase && number && symbol) {
    userPassword = lowerCaseLetter.concat(upper, numbers, specialCharacters);
  
  //Only 1 type of characters
  } else if (upperCase) {
    userPassword = upper;

  } else if (lowerCase) {
    userPassword = lowerCaseLetter;

  } else if (symbol) {
    userPassword = specialCharacters;

  } else if (number) {
    userPassword = numbers;
  
  //2 character types
  } else if (lowerCase && upperCase && !number && !symbol) {
    userPassword = lowerCaseLetter.concat(upper);
  
  } else if (lowerCase && number && !symbol && !upperCase) {
    userPassword = lowerCaseLetter.concat(numbers);
  
  } else if (lowerCase && symbol && !upperCase && !number) {
    userPassword = lowerCaseLetter.concat(specialCharacters);
  
  } else if (upperCase && number && !lowerCase && !symbol) {
    userPassword = upper.concat(numbers);
  
  } else if (number && symbol && !upperCase && !lowerCase){
    userPassword = numbers.concat(specialCharacters);
  
  } else if (upperCase && symbol && !number && !lowerCase) {
    userPassword = upper.concat(specialCharacters);  
    
  // 3 character types
  } else if (!lowerCase && upperCase && number && symbol) {
    userPassword = upper.concat(numbers, specialCharacters);
  
  } else if (lowerCase && !upperCase && number && symbol) {
    userPassword = lowerCaseLetter.concat(numbers, specialCharacters);

  } else if (lowerCase && upperCase && !number && symbol) {
    userPassword = upper.concat(lowerCaseLetter, specialCharacters);
  
  } else if (lowerCase && upperCase && number && !symbol) {
    userPassword = upper.concat(numbers, lowerCaseLetter);
  };
  
  //Create a loop to pick random characters upon whatever the user selected from the criteria and the length.
  for (var i = 0; i < userInput; i++ ) {
    
    var options = userPassword[Math.floor(Math.random() * userPassword.length)];
    passwordEmpty.push(options); //push options into the var passwordEmpty array.
  }
 
  //The join method concatenates the passwordEmpty array to a string.
  var password = passwordEmpty.join(''); //Using "" that the random picked character types are... 
  return password;                       //...not seperated by a "," and all characters build a string with the length defined by the userInput.

  //If the user already created a password before without this function if you create another password
  //it will just add password behind password behind password....

  //This var and function restarts the whole cycle of the writePassword function.
  var tryAgain;

  if (tryAgain) {
    writePassword();
  }

}


//Extra: Created a new button to copy the password, so when click on the button
// the created password will be copied and a alert will pop up with the copied password.
var copyPassword = document.querySelector("#copy")

copyPassword.addEventListener("click", copyText);

function copyText () {

   
  var selectText = document.getElementById("password");

  selectText.select();
  selectText.setSelectionRange(0, 128);

  document.execCommand("copy");

  var returnAlert = alert("Copied the Password: " + selectText.value);
  return returnAlert;
}