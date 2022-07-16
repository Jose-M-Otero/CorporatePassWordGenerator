// References Below:
// https://github.com/adambelin/Password-Generation/blob/main/Develop/script.js
// https://www.youtube.com/watch?v=duNmhKgtcsI
// http://www.net-comber.com/charset.html

// Assignment code here

const lowerCase = getRandomLower;
const upperCase = getRandomUpper;
const number = getRandomNumber;
const symbol = getRandomSymbol;

// Password Generator Function
function generatePassword() {
  // Prompt to enter password number length
  let length = prompt("Please enter length =>8 or =<128");
  length = parseInt(length);
  if (isNaN(length) || length < 8 || length > 128) {
    alert(
      "Please enter a number of a length of at least 8 characters and equal and no more than 128 characters"
    );
    return;
  }

  // Prompts to include necessary variables for password generation
  let specialChar = confirm("Do you want to include a special character");

  let numericChar = confirm("Do you want to include any numbers?");

  let lowerCaseChar = confirm("Do you want to include lowercase letters?");

  let upperCaseChar = confirm("Do you want to include any uppercase letters?");

  if (!specialChar && !numericChar && !lowerCaseChar && !upperCaseChar) {
    alert("Please choose one or more of the previous options");
    return;
  }

  // Verify to make sure the password includes at the minimum one of the password variables
  let password = "";
  let charset = "";
  if (specialChar) {
    charset += symbol;
  }
  if (numericChar) {
    charset += number;
  }
  if (lowerCaseChar) {
    charset += lowerCase;
  }
  if (upperCaseChar) {
    charset += upperCase;
  }

  for (let n = 0; n <= length; n++) {
    let index = Math.floor(Math.random() * charset.length);
    password += charset.charAt(index);
  }

  return password;
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  return +String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
