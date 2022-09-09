// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // input refers to the inputted text to be encoded or decoded.
  // shift refers to how much each letter is "shifted" by. A positive number means shifting to the right (i.e., A becomes D) whereas a negative number means shifting to the left (i.e., M becomes K).
  // encode refers to whether you should encode or decode the message. By default it is set to true.
  function caesar(input, shift, encode = true) {
    // Assigning alphabet to an array
    const alphabet = [
      'a','b','c','d','e','f','g','h','i','j','k','l','m',
      'n','o','p','q','r','s','t','u','v','w','x','y','z'
    ];
    //Returning false for edge cases
    if(!shift || shift === 0 || shift > 25 || shift < -25){
      return false;
    }
    //If encode is false caeser function decodes
    else if(encode === false){
  let output = [];
  //Changing input to lowercase 
const inputLowercase = input.toLowerCase();
for( let i = 0; i < inputLowercase.length; i++){//Looping through lowercase input
  for(let j = 0; j < alphabet.length; j++){//Looping through alphabet array
    let wrap = j-shift
    let cipher = alphabet[wrap]
  if(!alphabet.includes(inputLowercase[i])){
    //If alphabet array does not include the input character, add the input character to the array alphabet
    output.push(inputLowercase[i]);
    break;
  }
  else if(inputLowercase[i] === alphabet[j]){
  if(wrap < 0){
    let shiftL = wrap + 26;
    output.push(alphabet[shiftL])
  //If the wrap number is less than the 0, add 26 to wrap and assign it to shiftL to loop the negative index numbers to the end of the alphabet array  
  }
  else if(wrap > 25){
    let shiftR = wrap - 26;
    output.push(alphabet[shiftR])
  //If the wrap number is more than 25, minus 26 to wrap and assign it to shiftR to loop the index numbers to the beggining of the alphabet array
  }
  else {
    output.push(cipher)
  }
}
}
  }
const outputString = output.toString()
 const split = outputString.split(",").join("");
 return split  //Changes the output to a string, removes the commas and the spaces between the characters, while keeping the spaces that are part of the string
  }
//If encode is true caeser function encodes
  else if(encode === true){
    let output = [];
  const inputLowercase = input.toLowerCase();  //Changing input to lowercase 
  for( let i = 0; i < inputLowercase.length; i++){//Looping through lowercase input
    for(let j = 0; j < alphabet.length; j++){//Looping through alphabet array
      let wrap = j+shift
      let cipher = alphabet[wrap]
    if(!alphabet.includes(inputLowercase[i])){
//If alphabet array does not include the input character, add the input character to the array alphabet
      output.push(inputLowercase[i]);
      break;
    }
    else if(inputLowercase[i] === alphabet[j]){
    if(wrap < 0){
      let shiftL = wrap + 26;
      output.push(alphabet[shiftL])

//If the wrap number is less than the 0, add 26 to wrap and assign it to shiftL to loop the negative index numbers to the end of the alphabet array  
    }
    else if(wrap > 25){
      let shiftR = wrap - 26;
      output.push(alphabet[shiftR])
    }
    else {
      output.push(cipher)
//If the wrap number is more than 25, minus 26 to wrap and assign it to shiftR to loop the index numbers to the beggining of the alphabet array
    }
  }
  }
    }
  const outputString = output.toString()
   const split = outputString.split(",").join("");
   return split//Changes the output to a string, removes the commas and the spaces between the characters, while keeping the spaces that are part of the string
  }
}
  return {
    caesar,
  };
})();

// If the shift value isn't present, equal to 0, less than -25, or greater than 25, the function should return false.
// Spaces should be maintained throughout, as should other nonalphabetic symbols.
// Capital letters can be ignored.
// If a letter is shifted so that it goes "off" the alphabet (e.g., a shift of 3 on the letter z), it should wrap around to the front of the alphabet (e.g., z becomes c).

module.exports = { caesar: caesarModule.caesar };
