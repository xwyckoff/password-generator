// Assignment code here
const numeric = "1234567890";  //create strings for different symbols that can be put into the generated password
const letters = "abcdefghijklmnopqrstuvwxyz";
const specials = '!"#$%&()*+,-./:;<=>?@[]^_{}|~';

let includeUppercase;
let includeLowercase;
let includeNumbers;
let includeSymbols;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  let characters = ""; //set variable of characters that password generator can choose from
  let passwordLength;
  let finalPassword = "";


  do {
    passwordLength = Number(prompt("Please enter a password length. (no less than 8 characters and no more than 128)"));
  }while(isNaN(passwordLength) || (passwordLength < 8 || passwordLength > 128)) //checks if password is a number or between 8 and 128 characters

  includeUppercase = confirm("Include uppercase letters in the password?");
  includeLowercase = confirm("Include lowercase letters in the password?");
  includeNumbers = confirm("Include numbers in the password?");
  includeSymbols = confirm("Include special characters in the password?");

  //ternary operators to determine what characters to add to the string of available characters (if statements were too messy)
   includeUppercase ? characters += letters.toUpperCase() : characters;
   includeLowercase ? characters += letters : characters;
   includeNumbers ? characters += numeric : characters;
   includeSymbols ? characters += specials : characters;

   characters = characters.split(""); //converts available characters to array
   if(characters.length > 0) {        //checks that user has at least selected one type of character type to generate a password from
    for(let i = 0; i < passwordLength; i++){
      finalPassword += characters[Math.floor(Math.random() * characters.length)]; //pick a random character from the array and add it to the password for each character
    }
  } else {
    alert("You must select at least one charater type to include in your password!");//displays this message if the array is empty, meaning the user has not chosen a character type
    generatePassword();
    
  }

  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

