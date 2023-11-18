// Array of special characters to be included in password
const specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

let passwordLength ;
let includeLowercase ;
let includeUppercase ;
let includeNumeric ;
let includeSpecialChara ;
let passwordCriteria = {};

// Function to prompt user for password options
function getPasswordOptions() {
  
  //func to get correct input for password length
  function getLength(){ 
    passwordLength = prompt('Please state how many characters long the password should be (At least 8 characters but no more than 128.)');
        //while loop checks: 
        // The first 2 arguments check if the PasswordLength input is equal to or greater than 8 or equal to or less than 128 - anything outside this returns false incl letters
        // The last argument checks for floating points - if PasswordLength remainder = 0 then its a whole number
    while (!(passwordLength > 7) || !(passwordLength < 129) || !(passwordLength % 1 === 0) ){
      alert('Incorrect submission');
      getLength();
    };
  };
  getLength();
  
  //func to get character requirements ensuring at least one is provided
  function getRequiredChara (){
    includeLowercase = confirm('Should the password include lowercase characters? \n\nClick "OK" for yes or click "Cancel" for no');
    includeUppercase = confirm('Should the password include uppercase characters? \n\nClick "OK" for yes or click "Cancel" for no');
    includeNumeric = confirm('Should the password include numerical characters? \n\nClick "OK" for yes or click "Cancel" for no');
    includeSpecialChara = confirm('Should the password include Special characters ($@%&*, etc.) \n\nClick "OK" for yes or click "Cancel" for no');
        //while loop checks if all confirms are false
    while (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecialChara){
      alert('Incorrect submission. You must include at least one character option');
      getRequiredChara ();
    }
  }
  getRequiredChara ();
  
  // console.log(`Password Length is: ${passwordLength}`);
  // console.log(`Does it need to include Lowercase letters: ${includeLowercase}`);
  // console.log(`Does it need to include Uppercase letters: ${includeUppercase}`);
  // console.log(`Does it need to include numerical characters: ${includeNumeric}`);
  // console.log(`Does it need to include Special characters: ${includeSpecialChara}`);
  
  //create an object to collate the data from getPasswordOptions();
  passwordCriteria = {
    passwordLength: passwordLength,
    includeLowercase: includeLowercase,
    includeUppercase: includeUppercase,
    includeNumeric: includeNumeric,
    includeSpecialChara: includeSpecialChara
  }
}


// Function for getting a random element from an array
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random()* arr.length);
  return arr[randomIndex];
}


// Function to generate password with user input
function generatePassword() {
  
  //Get password criteria from user
  getPasswordOptions();
  console.log(passwordCriteria);
  
  //Initialising arrays to use in generatePassword() function
  let randomPassword = []; 
  let charactersRequired = [];

  //Check which criteria is needed for the password - if criteria is true, then add a random character from that array 
  //and then add that specific whole array to charactersRequired array to use later
  //By adding one character from each passwordCriteria that equals true, ensures at least one character is used from that required character set.

  if (passwordCriteria.includeLowercase) {
   randomPassword.push(getRandom(lowerCasedCharacters));
   charactersRequired = charactersRequired.concat(lowerCasedCharacters);
  };

  if (passwordCriteria.includeUppercase) {
    randomPassword.push(getRandom(upperCasedCharacters));
    charactersRequired = charactersRequired.concat(upperCasedCharacters);
   };

   if (passwordCriteria.includeNumeric) {
    randomPassword.push(getRandom(numericCharacters));
    charactersRequired = charactersRequired.concat(numericCharacters);
   };
   
   if (passwordCriteria.includeSpecialChara) {
    randomPassword.push(getRandom(specialCharacters));
    charactersRequired = charactersRequired.concat(specialCharacters);
   };

   console.log(`currently, the randompassword = `);
   console.log(randomPassword);
   
   console.log(`charactersRequired array now includes: `);
   console.log(charactersRequired);

   //Check how many more random characters are needed to reach required password length
   let remainingCharaNeeded = passwordCriteria.passwordLength - randomPassword.length;
   
   console.log(`Password length required = ${passwordCriteria.passwordLength}`);
   console.log(`Remaining characaters needed to reach required password length = ${remainingCharaNeeded}`);

   //loop through charactersRequired array, adding random indexes to randomPassword array, until required password length is reached
   for(let i = 0; i < remainingCharaNeeded; i++){
    randomPassword.push(getRandom(charactersRequired))
   };
   console.log(`after adding more characters, randomPassword = `);
   console.log(randomPassword);

   //turn randomPassword array into a string
   randomPassword = randomPassword.join('');
   console.log(`Password to join = ${randomPassword}`);
   console.log(`Completed password = ${randomPassword} and is ${randomPassword.length} long`);

   return randomPassword;
  }


// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);