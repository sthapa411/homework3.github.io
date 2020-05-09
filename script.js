

//variables for the prompt

var charChoices=[];
var upperCaseChar=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];
var lowerCaseChar=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialChar=["!","@","#","$","%","^","&","*","(",")","{","}","|","[","]",";","'",":","<",">","?","/"];
var numericChar=["1","1","3","4","5","6","7","8","9","0"];

function generatePassword() {

    var writePassword="";
    var useUpperCase=confirm("Would you like to include uppercase?");
    var useLowerCase=confirm("Would you like to include lowercase?");
    var useNumeric=confirm("Would you like to include numbers");
    var useSpecial=confirm("Would you like to include symbols?");

    
    if (useLowerCase == false && useUpperCase == false && useNumeric == false && useSpecial == false) {
      alert("Please select one type of character");
      useUpperCase=confirm("Would you like to include uppercase?");
      useLowerCase=confirm("Do you want to include lowercase characters?");
      useNumeric=confirm("Do you want to include numeric characters?");
      useSpecial=confirm("Do you want to include special characters?");
  }
   
  var passwordLength=parseInt(prompt("Choose how long you want your password to be (Choose from 8 to 128)"));
  if (passwordLength < 8 || passwordLength > 128 || typeof(passwordLength) != "number" || passwordLength === NaN || passwordLength === null) {
      alert("Choose a number that is more than 8 and less than 128 characters");
      passwordLength=parseInt(prompt("Choose how long you want your password to be. Choose from 8 to 128"))
  } 

  // console.log(passwordlength);

  if (useLowerCase==true){
    charChoices.push(lowerCaseChar);
} 

  if (useUpperCase==true){
    charChoices.push(upperCaseChar)

} 

  if (useNumeric==true){
    charChoices.push(numericChar)
    
}
  if (useSpecial==true){
    charChoices.push(specialChar)
}

for(var i=0; i<passwordLength; i++){
    var randomCharArrayNum;
    var selectedCharArray;
    var randomCharNum;
    var randomChar;
    
    randomCharArrayNum= parseInt(Math.floor(Math.random()*charChoices.length));    
    
    selectedCharArray=charChoices[randomCharArrayNum]; 

    console.log("The array has " + charChoices.length + " entries");
    
    console.log(randomCharArrayNum); 

    randomCharNum=Math.floor(Math.random()*selectedCharArray.length);
    
    console.log("The selected Array is the " + selectedCharArray); 
    
    console.log("The selected random index is " + randomCharNum); 
    
    
    randomChar=selectedCharArray[randomCharNum];

    console.log(randomChar);
    
    console.log("Your random character array number is " + randomCharArrayNum + " and your random character number is " + randomCharNum);
    
    
    writePassword+=randomChar; 
}


  console.log("Your password is " + writePassword);
  alert(("Your password is ") + writePassword);
  password.textContent=writePassword;    
}


var generate=document.getElementById('generate');
var password=document.getElementById('password');


console.log(generate)

generate.addEventListener('click', () => {
   generatePassword()
   password.innerHTML = writePassword 
});
//how to link the results to text area??

