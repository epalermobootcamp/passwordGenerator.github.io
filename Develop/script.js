// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function generatePassword() {
  var length = parseInt(
    prompt("Enter the desired password length: (from 8 to 128)")
  );

  // Checks if user entered a string or a number between 8 to 128 or
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid number between 8-128.");
    return;
  }

  var useUppercase = confirm("Do you want to include uppercase letters?");
  var useLowercase = confirm("Do you want to include lowercase letters?");
  var useNumbers = confirm("Do you want to include numbers?");
  var useSpecialChars = confirm("Do you want to include special characters?");

  // Validate to confirm user chose at least one criteria
  if (!useUppercase && !useLowercase && !useNumbers && !useSpecialChars) {
    alert("You must select at least one password criteria.");
    return;
  }

  // Declarations of all available characters that can be used
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var numberChars = "0123456789";
  var specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

  var availableChars = "";
  if (useUppercase) availableChars += uppercaseChars;
  if (useLowercase) availableChars += lowercaseChars;
  if (useNumbers) availableChars += numberChars;
  if (useSpecialChars) availableChars += specialChars;

  var password = "";

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * availableChars.length);
    password += availableChars.charAt(randomIndex);
  }

  return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
