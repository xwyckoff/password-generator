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
  let passwordLength = 20; //set variable for password length determined by user
  let finalPassword = "";

  //ternary operators to determine what characters to add to the string of available characters
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
    alert("You must select at least one charater type to include in your password!");
    generatePassword();
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

console.log(generatePassword());
