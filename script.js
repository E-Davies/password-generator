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

//**********************************************NOTES********************************************************** */

              // let PasswordLength = prompt('Please state how many characters long the password should be (At least 8 characters but no more than 128.)');
              // let includeLowercase = prompt('Should the password include lowercase characters? Please type yes or no?').toLowerCase();
              // let includeUppercase = prompt('Should the password include uppercase characters? Please type yes or no?').toLowerCase();
              // let includeNumeric = prompt('Should the password include numerical characters? Please type yes or no?').toLowerCase();
              // let includeSpecialChara = prompt('Should the password include Special characters ($@%&*, etc.) Please type yes or no?').toLowerCase();

              // const numberOnlyRegex = /\d/g;
              // const plength = '11';
              // let result = numberOnlyRegex.test(plength);
              // console.log(result)

              //|| (typeof PasswordLength === 'string') or use regex??

              // let includeUppercase = prompt('Should the password include uppercase characters? Please type yes or no?').toLowerCase();
              //   if (includeUppercase != 'yes' || includeUppercase != 'no'){
              //     alert('Incorrect submission');
              //     includeUppercase = prompt('Should the password include uppercase characters? Please type yes or no?').toLowerCase();
              //   };

              // let includeNumeric = prompt('Should the password include numerical characters? Please type yes or no?').toLowerCase();
              //   if (includeNumeric != 'yes' || includeNumeric != 'no'){
              //     alert('Incorrect submission.');
              //     includeNumeric = prompt('Should the password include numerical characters? Please type yes or no?').toLowerCase();
              //   };

              // let includeSpecialChara = prompt('Should the password include Special characters ($@%&*, etc.) Please type yes or no?').toLowerCase();
              //   if (includeSpecialChara != 'yes' || includeSpecialChara != 'no'){
              //     alert('Incorrect submission');
              //     includeSpecialChara = prompt('Should the password include Special characters ($@%&*, etc.) Please type yes or no?').toLowerCase();
              //   };
//**********************************************END OF NOTES********************************************************** */


// Function to prompt user for password options
function getPasswordOptions() {
  
  let PasswordLength ;
  let includeLowercase ;
  let includeUppercase ;
  let includeNumeric ;
  let includeSpecialChara ;

  
  function getLength(){ //*********need to add check if string is given instead of number & stop floats**********/
    PasswordLength = prompt('Please state how many characters long the password should be (At least 8 characters but no more than 128.)');
    while (PasswordLength < 8 || PasswordLength > 128 ){
      alert('Incorrect submission');
      getLength();
    };
  };
  getLength();
  
  function getOptions (){
    includeLowercase = confirm('Should the password include lowercase characters? \n\nClick "OK" for yes or click "Cancel" for no');
    includeUppercase = confirm('Should the password include uppercase characters? \n\nClick "OK" for yes or click "Cancel" for no');
    includeNumeric = confirm('Should the password include numerical characters? \n\nClick "OK" for yes or click "Cancel" for no');
    includeSpecialChara = confirm('Should the password include Special characters ($@%&*, etc.) \n\nClick "OK" for yes or click "Cancel" for no');
    
    while (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecialChara){
      alert('Incorrect submission. You must include at least one character option');
      getOptions ();
    }
  }
  getOptions ();
  
  console.log(`Password Length is: ${PasswordLength}`);
  console.log(`Does it need to include Lowercase letters: ${includeLowercase}`);
  console.log(`Does it need to include Uppercase letters: ${includeUppercase}`);
  console.log(`Does it need to include numerical characters: ${includeNumeric}`);
  console.log(`Does it need to include Special characters: ${includeSpecialChara}`);
  
}

getPasswordOptions();


// Function for getting a random element from an array
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random()* arr.length);
  return arr[randomIndex];
}


// Function to generate password with user input
function generatePassword() {
  let randonPassword = []; 
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